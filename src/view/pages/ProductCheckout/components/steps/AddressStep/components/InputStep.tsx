import { ComponentProps, forwardRef } from "react";
import { cn } from "../../../../../../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  label: string;
}

export const InputStep = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id, name, error, className, label, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="flex flex-col flex-1 gap-1">
        <label className="uppercase text-xs text-zinc-700">{label}</label>

        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            " w-full h-10 border px-3.5 placeholder:text-sm placeholder:text-gray-600",
            error
              ? "outline-none border-red-900"
              : "border-zinc-700 outline-none",
            className
          )}
          placeholder={placeholder}
        />

        {error && (
          <small className="text-red-800 block text-xs tracking-[-0.5px] mt-1">
            {error}
          </small>
        )}
      </div>
    );
  }
);
