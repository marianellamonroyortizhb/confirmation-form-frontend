type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  placeholder?: string
  className?: string
}

export default function FullNameInput({ value, onChange, label, placeholder, className }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 rounded-md mt-1 ${className}`}
      />
    </div>
  )
}
