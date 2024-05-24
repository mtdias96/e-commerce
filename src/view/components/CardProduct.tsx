import { Link } from 'react-router-dom';
import nike1 from '../../assets/images/products/airmax/1.png';
import st4 from '../../assets/images/products/stars/s4.svg';

export function CardProduct() {
  return (
    <Link
      to="#"
      className='border rounded-md border-blue-50 w-80 transform transition-transform duration-300 hover:-translate-y-2'
    >
      <div>
        <img className='w-80 h-72' src={nike1} alt="tenis nike" />
      </div>

      <div className='mt-3 flex flex-col justify-center items-center gap-2 pb-4'>
        <h2 className='text-lg font-bold leading-7 tracking-wider text-blue-950'>Nike Air Max 270 React</h2>
        <img className='w-32 h-4' src={st4} alt="estrelas" />
        <p className='flex gap-4 items-center justify-center'>
          <span className='text-blue-400 font-bold left-8 tracking-wider'>R$ 888,00</span>
          <span className='text-gray-500 line-through text-sm'>R$ 1200,99</span>
          <span className='text-red-500 font-bold text-sm'>24% Off</span>
        </p>
      </div>
    </Link>
  );
}
