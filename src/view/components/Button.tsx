import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-400 hover:bg-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed px-6 h-12 rounded-xl font-medium text-white disabled:text-gray-400 mt-3 transition-all active:bg-blue-900"
    />
  )
}
