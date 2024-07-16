import { FiMinus } from "react-icons/fi";
import { IoIosAdd, IoIosCloseCircleOutline } from "react-icons/io";
import imgGroup from "../../../../../app/utils/imgGroup";
import { useCardCartController } from "./useCardCartController";

type CardCartProps = {
  name: string;
  price: number;
  size: string;
  color: string;
  image: number;
  brand: string
}

export function CardCart({ color, image, name, price, size, brand, }: CardCartProps) {
  const { handleMinus, handlePus, quantity, handleCLoseProduct } = useCardCartController()
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4">
        <img src={imgGroup[image]} alt="Product Image" className="w-24 h-24 md:w-36 md:h-36 rounded-md" />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg md:text-xl font-bold">{name}</h3>
          <div className='flex flex-col'>
            <p className="text-sm md:text-base flex flex-col">
              <span>Tamanho: {size}</span>
              <span className="">Cor: {color}</span>
              <span className="">Marca: {brand}</span>
            </p>
          </div>
          <span className="text-base md:text-lg font-bold">R${price}</span>
        </div>
      </div>

      <div className="flex items-center mt-4 md:mt-0">
        <div className="flex items-center">
          <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
            <IoIosAdd
              onClick={handlePus}
              className='h-6 w-6' />
          </button>
          <span className="text-lg md:text-xl mx-4">{quantity}</span>
          <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
            <FiMinus
              onClick={handleMinus}
              className="h-6 w-6" />
          </button>
        </div>
        <button className="ml-4 text-red-600 focus:outline-none">
          <IoIosCloseCircleOutline
            onClick={() => handleCLoseProduct(name)}
            className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
