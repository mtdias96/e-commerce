import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { formatCurrency } from "../../app/utils/formatCurrency";
import imgGroup from "../../app/utils/imgGroup";

type CardProductProps = {
  id?: string;
  name: string;
  price: number;
  image: number[];
}

export function CardProduct({ name, price, image, id = '' }: CardProductProps) {
  return (
    <div className='border rounded-md border-blue-50 mb-8 transform transition-transform duration-300 hover:-translate-y-2 '>
      <div className="relative w-full overflow-hidden group">
        <img className="w-full h-auto object-cover" src={imgGroup[image[0]]} alt="tenis" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-45 flex items-center justify-center gap-4 sm:gap-6 lg:gap-9 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <Link to='#' className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <FaRegHeart className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link to={`/produto/${id}`} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <IoCartOutline className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
      <Link to={`/produto/${id}`} className='mt-3 flex flex-col justify-center items-center gap-2 pb-4 max-w-full text-center'>
        <h2 className='text-sm sm:text-base md:text-lg font-bold leading-6 md:leading-7 tracking-wider text-blue-950'>{name}</h2>
        <span className='font-bold text-xl tracking-wider max-w-full'>{formatCurrency(price)}</span>
        <p className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center'>
          ou 6x de {formatCurrency(price / 6)}
        </p>
      </Link>
    </div>
  );
}





