import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, id, name, ...props }: InputProps) {
  const inputId = id ?? name

  return (
    <div className='relative'>
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white w-full rounded-md border border-blue-100 px-3 h-[52px] pt-4 peer placeholder-shown:pt-0 outline-none focus:border-blue-400 transition-all"
        placeholder=' '
      />

      <label
      htmlFor={inputId}
      className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
      >{placeholder}</label>
    </div>
  )
}
