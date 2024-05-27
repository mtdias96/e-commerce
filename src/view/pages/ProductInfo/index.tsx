import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import { useProductInfoController } from './useProductInfoController';

export function ProductInfo() {
  const { handleMinus, handlePus, quantity, productId } = useProductInfoController()

  return (
    <>
      <Menu />
      <section className="mt-20 w-full px-4 py-8 flex flex-col items-center font-roboto">
        <div className="mt-20 w-full max-w-7xl flex flex-wrap gap-12 justify-center">
          <div className="flex-shrink-0">
            <div className="mb-16 flex justify-center">
              <img className="w-[600px] h-[400px] rounded-lg object-cover" src={productId.image[0]} alt="" />
            </div>
            <div className="flex justify-between">
              {productId.image.slice(1).map((img, index) => (
                <img key={index} className="w-[190px] h-[190px] ml-2 rounded-lg object-cover" src={img} alt="" />
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col  gap-8 max-w-md">
            <h2 className="text-2xl font-medium text-gray-900 font-sans">TÊNIS NIKE DUNK LOW "JUST DO IT" AZUL</h2>

            <div className='flex flex-col justify-between'>
              <div className="flex items-center justify-between mb-2">
                <h3 className=" text-2xl text-gray-800 font-sans">R$ 999,90</h3>
                <h3 className="text-gray-500 text-lg line-through">R$ 1800,99</h3>
                <span className="bg-red-500 border rounded-md p-1 font-semibold">20% OFF</span>
              </div>

              <div>
                <p className='text-gray-600 text-sm font-mono'>em 6X de R$ 166,65(Sem juros)</p>
              </div>
            </div>
            {/*gap*/}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h4 className="text-sm text-gray-700">Disponibilidade</h4>
                <span className="text-sm text-gray-700">Em estoque</span>
              </div>
              <div className="flex justify-between">
                <h4 className="text-sm text-gray-700">Categoria</h4>
                <span className="text-sm text-gray-700">Tenis</span>
              </div>
            </div>
            {/*gap*/}
            <div className="flex flex-col">
              <label htmlFor="size" className="text-sm text-gray-800 mb-2">Selecione o tamanho:</label>
              <div className="flex gap-2 pb-4 border-b border-gray-300">
                {[38, 39, 40, 41, 42, 43].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:border-black transition-all"
                  >
                    {size}
                  </button>
                ))}

              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className='text-sm'>Quantidade:</p>

                <div className='relative flex items-center max-w-[8rem]'>
                  <button
                    onClick={handleMinus}
                    type="button"
                    id="decrement-button"
                    className="bg-gray-500 hover:bg-gray-200 border border-gray-300 border-r-0 rounded-s-lg p-3 h-11 focus:outline-none">

                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>

                  <span className="bg-gray-50 border border-gray-400 h-11 text-centertext-sm block w-full py-2.5 text-gray-700 p-8">
                    {quantity}
                  </span>

                  <button
                    onClick={handlePus}
                    type="button"
                    id="increment-button"
                    className="bg-gray-500 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none">

                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>

                  </button>
                </div>

              </div>
            </div>
            <div className="flex justify-between flex-col gap-4 pt-8 pb-8 border-b border-t border-gray-300">
              <Link to="#" className="flex justify-center items-center gap-4 px-8 py-3 bg-red-500 text rounded transition-opacity hover:opacity-70">
                <FiShoppingCart className='text-white' />
                <span className="text-white font-bold">COMPRAR</span>
              </Link>
              <button className='border border-black rounded bg-transparent px-8 py-3 flex justify-center items-center bg-gray-900 hover:bg-gray-50 hover:opacity-70 transition-all'>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 mb-20 w-full max-w-3xl p-8 bg-gray-100 rounded">
          <div className="flex justify-center pb-5 border-b-3 border-gray-200">
            <h3 className="text-lg">Detalhes do produto</h3>
          </div>
          <div className="pt-8 flex justify-center">
            <p className="text-base text-gray-400">
              {productId.description}
            </p>
          </div>
        </div> */}


        <div className="mt-16 mb-20 w-full max-w-[1200px] p-8 bg-gray-50 rounded">
          <div className="flex justify-center pb-5 border-b-3 border-gray-200">
            <h3 className="text-lg">Detalhes do produto</h3>
          </div>
          <div className="pt-8">
            <p className="text-base text-gray-700">O ar livre é para todos – e este calçado também. O AF1 clássico recebe uma atualização aventureira com cadarços utilitários, materiais duráveis e costuras resistentes. A entressola revestida em tecido é leve e mais flexível, enquanto uma almofada adicional no calcanhar cria conforto extra. Os detalhes bordados contrastam com os detalhes tipo bota para um visual versátil e funcional.</p>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default ProductInfo;
