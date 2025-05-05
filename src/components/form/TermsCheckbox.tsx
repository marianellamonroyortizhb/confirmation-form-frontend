import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  termsLink: string
  error?: boolean
}

export default function TermsCheckbox({ checked, onChange, termsLink, error }: Props) {
  const { t } = useTranslation()

  return (
    <div className="mb-4 flex items-start gap-2">
      <input
        type="checkbox"
        id="acceptTerms"
        name="acceptTerms"
        checked={checked}
        onChange={onChange}
        className={`mt-1 ${error ? 'ring-1 ring-red-500' : ''}`}
      />
      <label htmlFor="acceptTerms" className="text-sm text-gray-700">
        {t('form.accept')}{' '}
        <a
          href={termsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ml-blue hover:underline"
        >
          {t('form.terms')}
        </a>
      </label>
    </div>
  )
}
