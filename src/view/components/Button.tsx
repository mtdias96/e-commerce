import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
  children: string
}

export function Button({ className, isLoading, children, disabled, ...props }: ButtonProps) {

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn("bg-slate-800 disabled:bg-gray-100 disabled:cursor-not-allowed px-6 h-12 rounded-xl font-medium text-white disabled:text-gray-400  transition-all  flex items-center justify-center",
        className)}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  )
}


