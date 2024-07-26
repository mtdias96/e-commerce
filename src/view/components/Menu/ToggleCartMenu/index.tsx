import { FiShoppingCart } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { cn } from "../../../../app/utils/cn";
import { CardCart } from "../../../pages/ProductCart/components/CardCart";
import { Button } from "../../Button";
import { UseToggleCartMenu } from "./useToggleCartMenu";

export function ToggleCartMenu() {
  const { toggleMenuCart, productsCounter, isMenuCartOpen, productCart } = UseToggleCartMenu()

  return (
    <>
      {isMenuCartOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={toggleMenuCart}
        >
        </div>
      )}

      <div className={cn(`fixed inset-y-0 right-0 bg-white z-50 h-full w-full sm:w-[540px] transition-transform transform duration-500 ${isMenuCartOpen ? 'translate-x-0' : 'translate-x-full'}`)}>

        <div className="px-8">
          <div className="py-6 flex items-center justify-between border-b border-gray-200">
            <h1 className="font-bold text-xl sm:text-2xl tracking-[-1px]">Seu carrinho de compras</h1>
            <RxCross1
              className="h-6 w-6 font-bold cursor-pointer"
              onClick={toggleMenuCart}
            />
          </div>

          <div className="overflow-y-auto">
            <span className=" mt-4 block text-base md:text-lg font-semibold tracking-[-0.5px]">{productsCounter} Itens adicionados</span>
            {productCart.length > 0 && (
              productCart.map((product) => (
                <div
                  className="border-b border-gray-200 py-8 overflow-y-auto"
                  key={product.id}>
                  <CardCart
                    name={product.name}
                    size={product.size}
                    price={product.price}
                    image={product.image[0]}
                  />
                </div>
              ))
            )}
          </div>

          <div className="px-4 w-full flex flex-col gap-4 absolute bottom-4 left-0 ">
            <Link to='/carrinho' className="w-full uppercase bg-red-800/90 hover:bg-red-900/90 px-6 h-12 rounded-xl flex justify-center items-center text-white font-bold transition-all">Ir Para o Chekout</Link>

            <Button
              className="w-full uppercase bg-transparent text-black border border-cyan-950 hover:opacity-80"
              onClick={toggleMenuCart}
            >
              continuar comprando
            </Button>
          </div>
        </div>
      </div>

      <button
        className="hover:opacity-65 transition-all relative"
        onClick={toggleMenuCart}
      >
        <FiShoppingCart className="w-6 h-6" />

        {productsCounter > 0 &&
          <div className="bg-red-500 w-5 h-5 rounded-full flex justify-center items-center absolute bottom-3 left-3.5">
            <span className="text-center text-white text-xs">{productsCounter}</span>
          </div>
        }
      </button>

    </>
  )
}
