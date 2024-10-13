export default function Input({ label, name, type = "text", placeholder ,defaultValue ,disabled ,error}: { label: string, defaultValue?:any , name: string, type?: string, placeholder?: string , disabled?: boolean , error?: string[]}) {
    return (
      <div>
        <label className="block font-semibold ">{label}</label>
        <input
          type={type}
          name={name}
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {error?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
      </div>
    );
  }