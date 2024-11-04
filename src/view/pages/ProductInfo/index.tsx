import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import { formatCurrency } from "../../../app/utils/formatCurrency";
import imgGroup from "../../../app/utils/imgGroup";
import scrollTop from "../../../app/utils/scrollTop";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { SizeSelector } from "../../components/SizeSelector";
import { useProductInfoController } from "./useProductInfoController";
import { Spinner } from "../../components/Spinner";

export function ProductInfo() {
  const { id } = useParams();
  const {
    handleMinus,
    handlePus,
    quantity,
    product,
    addCart,
    addChekout,
    handleSelectSize,
    settings,
    isMobile,
    isLoading,
  } = useProductInfoController(id || "");
  scrollTop();

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="z-50 mb-16">
        <Menu />
      </div>

      <div className="flex-grow relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 bg-opacity-75 z-40 flex justify-center items-center">
            <Spinner className="w-16 h-16 text-gray-300 fill-slate-800" />
          </div>
        )}
        <section className="mt-4 w-full px-4 py-8 flex flex-col items-center font-roboto min-h-[calc(100vh-200px)]">
          {product ? (
            <div className="mt-10 md:mt-20 w-full max-w-7xl flex flex-wrap gap-12 justify-center">
              {!isMobile ? (
                <div className="flex-shrink-0">
                  <div className="mb-16 flex justify-center">
                    {product.image.slice(0, 1)?.map((_, index) => (
                      <img
                        key={index}
                        className="w-[600px] h-[400px] rounded-lg object-cover"
                        src={imgGroup[product?.image[index]]}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {product?.image.slice(1).map((_, index) => (
                      <img
                        key={index}
                        className="w-[160px] h-[160px] ml-2 rounded-lg object-cover"
                        src={imgGroup[product.image[index]]}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-shrink-0 w-full md:w-auto">
                  {product?.image && (
                    <div className="mb-16 flex justify-center w-full md:w-auto">
                      <Slider {...settings} className="w-full md:w-auto">
                        {product.image?.map((_, index) => (
                          <div key={index}>
                            <img
                              className="w-full md:w-[600px] h-[400px] rounded-lg object-cover"
                              src={imgGroup[product?.image[index]]}
                              alt=""
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
              )}

              <div className="w-full flex flex-col gap-8 max-w-md">
                <h2 className="text-2xl font-medium text-gray-900 font-sans uppercase">
                  {product.name}
                </h2>

                <div className="flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl text-gray-800 font-sans">
                      {formatCurrency(product.price)}
                    </h3>
                    <h3 className="text-gray-500 text-lg line-through">
                      R$ {product.price}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm font-mono">
                      em 6X de {formatCurrency(product.price / 6)} (Sem juros)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between">
                    <h4 className="text-sm text-gray-700">Disponibilidade</h4>
                    <span className="text-sm text-gray-700">Em estoque</span>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-sm text-gray-700">Categoria</h4>
                    <span className="text-sm text-gray-700">
                      {product.category?.name}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="size" className="text-sm text-gray-800 mb-2">
                    Selecione o tamanho:
                  </label>
                  <div className="flex gap-2 pb-4 border-b flex-wrap border-gray-300">
                    {product.variations.map((variation) => (
                      <SizeSelector
                        quantity={variation.quantity}
                        size={variation.size}
                        key={variation.size}
                        onSelectSize={handleSelectSize}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-4">
                    <p className="text-sm">Quantidade:</p>

                    <div className="relative flex items-center max-w-[8rem]">
                      <button
                        onClick={handleMinus}
                        type="button"
                        id="decrement-button"
                        className="bg-gray-500 hover:bg-gray-200 border border-gray-300 border-r-0 rounded-s-lg p-3 h-11 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>

                      <span className="bg-gray-50 border border-gray-400 h-11 text-centertext-sm block w-full py-2.5 text-gray-700 p-8">
                        {quantity}
                      </span>

                      <button
                        onClick={handlePus}
                        type="button"
                        id="increment-button"
                        className="bg-gray-500 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none"
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col gap-4 pt-8 pb-8 border-b border-t border-gray-300">
                  <button
                    onClick={() => addChekout("/carrinho")}
                    className="flex justify-center items-center gap-4 px-8 py-4 flex-1 bg-red-500 text rounded transition-opacity enabled:hover:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black"
                  >
                    <FiShoppingCart className="font-bold" />
                    COMPRAR
                  </button>
                  <button
                    onClick={addCart}
                    className="border border-black rounded bg-transparent px-8 py-3 flex justify-center items-center bg-gray-900 hover:bg-gray-50 hover:opacity-70 transition-all"
                  >
                    <span>ADICIONAR AO CARRINHO</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full" />
          )}
        </section>
      </div>

      <div className="z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default ProductInfo;
