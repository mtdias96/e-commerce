import { useMediaQuery } from 'react-responsive';
import { formatCurrency } from '../../../app/utils/formatCurrency';
import { Button } from '../../components/Button';
import Footer from "../../components/Footer";
import Menu from '../../components/Menu';
import { CardCart } from './components/CardCart';
import { useProductCartController } from './useProductCartController';

export function ProductCart() {
  const { productCart, priceProducts, } = useProductCartController()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1224px)'
  })

  console.log(isDesktopOrLaptop);

  return (
    <>
      <Menu />
      <section className="pt-48 w-full bg-gray-50 min-h-screen">
        <h2 className="text-center text-5xl font-bold">CARRINHO</h2>

        {productCart.length > 0 && (
          <div className='flex flex-col md:flex-row w-full justify-center gap-6 mt-8'>
            <div className={`bg-white shadow-md rounded-lg p-4 md:p-6 mb-4 flex flex-col overflow-y-auto md:h-[420px] ${productCart.length > 3 ? 'md:grid-cols-3' : 'md:grid-cols' + productCart.length}`}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {productCart.length > 0 && (
                  productCart.map((product) => (
                    <CardCart
                      id={product.id}
                      name={product.name}
                      size={product.size}
                      price={product.price}
                      image={product.image[0]}
                      key={product.id}
                    />
                  ))
                )}
              </div>
            </div>

            <div className='flex flex-col justify-start bg-white shadow-md rounded-lg p-4 md:p-6 mb-4 w-full md:w-[400px] md:h-[420px]'>
              <h3 className='text-2xl font-bold mb-6'>Resumo do Pedido</h3>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between '>
                  <p className='text-xl text-black/60'>Subtotal</p>
                  <span className='text-right text-xl font-medium'>{formatCurrency(priceProducts)}</span>
                </div>

                <div className='flex items-center justify-between '>
                  <p className='text-xl text-black/60'>Desconto</p>
                  <span className='text-right text-xl font-medium text-red-700'>R$ 00,00</span>
                </div>

                <div className='flex items-center justify-between pb-5 border-b border-gray-200 '>
                  <p className='text-xl text-black/60'>FRETE</p>
                  <span className='text-right text-xl font-medium'>R$ 0</span>
                </div>
              </div>

              <div className='w-full flex flex-col gap-4'>
                <div className='flex justify-between mt-4'>
                  <p className='text-xl'>Total</p>
                  <span className='text-2xl font-medium'>{formatCurrency(priceProducts)} </span>
                </div>
                <div className='flex justify-between gap-2 '>

                  <div className="w-full">
                    <div className='flex items-center relative w-full justify-between'>
                      <input
                        name='promotional'
                        type="text"
                        placeholder="CODIGO PROMOCIONAL"
                        className="outline-none px-8 bg-zinc-100 border border-black rounded-lg rounded-e-none flex-grow placeholder:px-8 w-full h-[52px] placeholder:text-zinc-400 placeholder:text-sm"
                      />
                      <Button className='w-20 h-[52px] text-xs bg-transparent bg-black border border-gray-600 rounded-lg hover:opacity rounded-s-none'>
                        APLICAR
                      </Button>
                    </div>
                  </div>
                </div>
                <Button className='w-full bg-red-500 hover:opacity-80 '>COMPRAR</Button>
              </div>
            </div>
          </div>
        )}

        {productCart.length === 0 && <h2 className='text-center mt-8'>Você ainda não possui produtos :(</h2>}
      </section>

      <Footer />
    </>
  )
}
