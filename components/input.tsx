export default function Input({ label, name, type = "text", placeholder ,defaultValue ,disabled}: { label: string, defaultValue?:any , name: string, type?: string, placeholder?: string , disabled?: boolean}) {
    return (
      <div>
        <label className="block font-semibold text-color5">{label}</label>
        <input
          type={type}
          name={name}
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </div>
    );
  }