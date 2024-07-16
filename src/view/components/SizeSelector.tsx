import { Button } from "./Button"

interface SizeSelectorProps {
  onSelectSize(size: string): void
  size: string
  quantity: number
}

export function SizeSelector({ size, quantity, onSelectSize }: SizeSelectorProps) {
  return (
    <Button
      key={size}
      onClick={() => onSelectSize(size)}
      className="w-10 h-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:border-black transition-all bg-transparent"
      disabled={quantity === 0}
    >
      {size}
    </Button>
  )
}
