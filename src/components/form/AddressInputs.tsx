import { ChangeEvent } from 'react'

type Props = {
  formData: {
    city: string
    address: string
    addressDetail: string
  }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  t: (key: string) => string
  errors: {
    city?: boolean
    address?: boolean
    addressDetail?: boolean
  }
}

export default function AddressInputs({ formData, onChange, t, errors }: Props) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          {t('form.city')}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={onChange}
          className={`w-full p-2 rounded-md mt-1 border ${
            errors.city ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={t('form.tipCity')}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          {t('form.address')}
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={onChange}
          className={`w-full p-2 rounded-md mt-1 border ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={t('form.address')}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="addressDetail" className="block text-sm font-medium text-gray-700">
          Piso / Oficina / Apartamento
        </label>
        <input
          type="text"
          id="addressDetail"
          name="addressDetail"
          value={formData.addressDetail}
          onChange={onChange}
          className={`w-full p-2 rounded-md mt-1 border ${
            errors.addressDetail ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={t('form.addressDetail')}
        />
      </div>
    </>
  )
}
