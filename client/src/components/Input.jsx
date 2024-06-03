import React from 'react'

function Input({label, type, placeholder, customStyle, name, value, required, onchange}) {
  return (
    <div className="mb-4">
    <label className={` ${ required ? "after:content-['*'] after:ml-0.5 after:text-red-500": "" } block text-md font-medium text-slate-700 md:text-xl capitalize mb-1 ml-1 `}>{label}</label>
    <input
      type={type}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200 ${customStyle}`}
      placeholder={placeholder}
      name={name}
      defaultValue={value}
      required={required}
      onChange={onchange}

    />
  </div>
  )
}

export default Input