import { ChangeEvent } from 'react'

type Country = {
  code: string
  name: string
}

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  label: string
  placeholder?: string
  className?: string
  countries: Country[]
  tip: string
}

export default function CountrySelector({
  value,
  onChange,
  label,
  placeholder,
  countries,
  className,
}: Props) {
  return (
    <div className="mb-4">
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="country"
        name="country"
        value={value}
        onChange={onChange}
        className={`w-full p-2 rounded-md mt-1 ${className}`}
      >
        <option value="">{placeholder}</option>
        {countries.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
