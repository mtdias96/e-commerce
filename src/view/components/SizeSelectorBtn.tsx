import { Button } from "./Button";

interface SizeSelectorBtnProps {
  sizes: string[]
}

export function SizeSelectorBtn({ sizes }: SizeSelectorBtnProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Button
          key={size}
          className="w-14 h-6 py-4 px-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:bg-black focus:text-white text-xs transition-all bg-transparent "
        >
          {size}
        </Button>
      ))}
    </div>
  )
}
