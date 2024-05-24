import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>( ({ placeholder, id, name, error, className, ...props }, ref)  => {
  const inputId = id ?? name

  return (
    <div className='relative'>
      <input
        {...props}
        ref={ref}
        name={name}
        id={inputId}
        className={cn("bg-white w-full rounded-md border border-blue-100 px-3 h-[52px] pt-4 peer placeholder-shown:pt-0 outline-none focus:border-blue-400 transition-all", error && '!border-red-600',
        className
        )}
        placeholder=' '
      />

      <label
      htmlFor={inputId}
      className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
      >{placeholder}</label>

      {error && (<div className='flex gap-2 items-center mt-2 text-red-600 '>
        <CrossCircledIcon/>
        <span className=' text-xs'>{error}</span>
      </div>
)}
    </div>
  )
}
)
