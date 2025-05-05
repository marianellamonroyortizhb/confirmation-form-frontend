import { ChangeEvent, JSX } from 'react'
import { House, Building2, Star } from 'lucide-react'

type Option = {
  id: string
  label: string
  icon: JSX.Element
}

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: boolean
}

const options: Option[] = [
  { id: 'home', label: 'Hogar', icon: <House size={20} /> },
  { id: 'office', label: 'Oficina', icon: <Building2 size={20} /> },
  { id: 'other', label: 'Otro', icon: <Star size={20} /> },
]

export default function AddressTypeSelector({ value, onChange, label, error }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor="addressType" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`flex flex-wrap gap-2 justify-between ${error ? 'border border-red-500 p-2' : ''}`}
      >
        {options.map((opt) => (
          <label
            key={opt.id}
            className={`flex-1 min-w-[100px] max-w-[200px] flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition-colors ${
              value === opt.id
                ? 'bg-ml-yellowLight border-ml-gray'
                : 'bg-white border-gray-300 hover:bg-gray-100'
            }`}
          >
            <input
              type="radio"
              name="addressType"
              value={opt.id}
              checked={value === opt.id}
              onChange={onChange}
              className="hidden"
            />
            <span className="text-ml-black">{opt.icon}</span>
            <span className="text-sm font-medium text-gray-800">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
