import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<'button'> {
}

export function Button({ className,...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("bg-blue-400 hover:bg-blue-600 disabled:bg-gray-100 disabled:cursor-not-allowed px-6 h-12 rounded-xl font-medium text-white disabled:text-gray-400  transition-all active:bg-blue-900", className)}
    />
  )
}
