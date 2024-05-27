import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

import nike1 from '../../assets/images/products/airmax/19.png';
import st4 from '../../assets/images/products/stars/s4.svg';

export function CardProduct() {
  return (
    <div
      className='border rounded-md border-blue-50 w-80 transform transition-transform duration-300 hover:-translate-y-2'
    >
      <div className="relative w-80 h-72 overflow-hidden group">
        <img className="w-full h-full object-cover" src={nike1} alt="tenis nike" />

        <div className="absolute inset-0 bg-gray-800 bg-opacity-45 flex items-center justify-center gap-9 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">

          <Link to='#' className="w-14 h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <FaRegHeart className="text-blue-600 w-6 h-6" />
          </Link>

          <Link to="/shop/product/:productId" className="w-14 h-14 flex items-center justify-center border-2 border-gray-500 rounded-full bg-transparent hover:opacity-45 transition-all">
            <IoCartOutline className="text-blue-600 w-6 h-6 " />
          </Link>

        </div>
      </div>

      <Link to="/shop/product/:productId" className='mt-3 flex flex-col justify-center items-center gap-2 pb-4'>
        <h2 className='text-lg font-bold leading-7 tracking-wider text-blue-950'>Nike Air Max 270 React</h2>
        <img className='w-32 h-4' src={st4} alt="estrelas" />
        <p className='flex gap-4 items-center justify-center'>
          <span className='text-blue-400 font-bold left-8 tracking-wider'>R$ 888,00</span>
          <span className='text-gray-500 line-through text-sm'>R$ 1200,99</span>
          <span className='text-red-500 font-bold text-sm'>24% Off</span>
        </p>
      </Link>
    </div>
  );
}
