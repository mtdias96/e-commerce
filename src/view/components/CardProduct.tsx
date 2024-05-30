import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { useDiscount } from "../../app/hooks/useDiscount";
import imgGroup from "../../app/utils/imgGroup";
import st4 from '../../assets/images/products/stars/s4.svg';

export interface CardProductProps {
  id?: number;
  name: string;
  price: number;
  image: number[];
}

export function CardProduct({name, price,image, id=0} :CardProductProps) {
  const {formattedValue} = useDiscount(price)
  return (
    <div className='border rounded-md border-blue-50 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 transform transition-transform duration-300 hover:-translate-y-2'>
      <div className="relative w-full overflow-hidden group">
        <img className="w-full h-auto object-cover" src={imgGroup[image[0]]} alt="tenis nike" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-45 flex items-center justify-center gap-4 sm:gap-6 lg:gap-9 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <Link to='#' className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <FaRegHeart className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link to={`/shop/product/:${Number(id)}`} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <IoCartOutline className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
      <Link to="/shop/product/:productId" className='mt-3 flex flex-col justify-center items-center gap-2 pb-4 max-w-full text-center'>
        <h2 className='text-sm sm:text-base md:text-lg font-bold leading-6 md:leading-7 tracking-wider text-blue-950'>{name}</h2>
        <img className='w-24 sm:w-28 md:w-32 h-4' src={st4} alt="estrelas" />
        <p className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center'>
          <span className='text-blue-400 font-bold tracking-wider max-w-full'>R$ {formattedValue}</span>
          <span className='text-gray-500 line-through text-xs sm:text-sm'>R${price}</span>
          <span className='text-red-500 font-bold text-xs sm:text-sm'>24% Off</span>
        </p>
      </Link>
    </div>
  );
}
