import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import imgGroup from "../../../../../app/utils/imgGroup";
import { useCardCartController } from "./useCardCartController";

type CardCartProps = {
  name: string;
  price: number;
  size: string;
  image: number;
}

export function CardCart({ image, name, price, size, }: CardCartProps) {
  const { handleMinus, handlePus, quantity, handleCLoseProduct } = useCardCartController()
  return (
    <div className="flex flex-col md:items-center md:justify-between">
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <img src={imgGroup[image]} alt="Product Image" className="w-24 h-24 md:w-36 md:h-36 rounded-md" />
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-bold">{name}</h3>
            <div className='flex flex-col space-y-1'>
              <p className="text-sm md:text-base flex flex-col">
                <span>Tamanho: {size}</span>
              </p>
              <span className="text-base md:text-lg">{formatCurrency(price)}</span>
            </div>
            <div className="flex md:mt-0">
              <div className="flex items-center justify-between">
                <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                  <FaMinus
                    onClick={handleMinus}
                    className="h-5 w-5 text-black/45" />
                </button>
                <span className="text-lg md:text-xl mx-4">{quantity}</span>
                <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                  <FaPlus
                    onClick={handlePus}
                    className='h-5 w-5 text-black/45' />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="ml-4  focus:outline-none">
            <FiTrash
              onClick={() => handleCLoseProduct(name)}
              className="w-6 h-6" />
          </button>
        </div>



      </div>

    </div>
  )
}
