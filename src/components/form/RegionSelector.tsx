import { ChangeEvent } from 'react'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  label: string
  placeholder: string
  className?: string
  regions: string[]
}

export default function RegionSelector({
  value,
  onChange,
  label,
  placeholder,
  regions,
  className,
}: Props) {
  if (regions.length === 0) return null

  return (
    <div className="mb-4">
      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="region"
        name="region"
        value={value}
        onChange={onChange}
        className={`w-full p-2 rounded-md mt-1 ${className}`}
      >
        <option value="">{placeholder}</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}
