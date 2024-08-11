import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { cepState, ICepDate } from "../../../../app/interfaces/ICep";
import { cepService } from "../../../../app/services/CepService";
import { cn } from "../../../../app/utils/cn";
import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { CardCart } from "../../../pages/ProductCart/components/CardCart";
import { Button } from "../../Button";
import { UseToggleCartMenu } from "./useToggleCartMenu";

export function ToggleCartMenu() {
  const { toggleMenuCart, productsCounter, isMenuCartOpen, productCart } = UseToggleCartMenu();
  const { handleSubmit: submit, register, watch } = useForm();
  const [cep, setCep] = useState<cepState[]>([]);
  const [price, setPrice] = useState<number>(0);
  const buttonMobile = useMediaQuery({
    query: '(max-height: 867px)'
  })

  const { mutateAsync, data } = useMutation({
    mutationFn: async (cepData: ICepDate) => {
      return cepService.cepCalculator(cepData);
    },
  });

  useEffect(() => {
    if (data) {
      const filteredCep = data
        .filter((result) => result.name === "SEDEX" || result.name === "Express")
        .map((result) => ({
          name: result.name,
          price: result.price || "",
          deliveryTime: result.delivery_range || { min: 0, max: 0 },
        }));

      setCep(filteredCep);
    }
  }, [data]);

  const selectedShipping = Number(watch("shippingOption"))

  useEffect(() => {
    const totalProductPrice = productCart.reduce((acc, product) => acc + product.price, 0);
    const totalPrice = selectedShipping ? totalProductPrice + selectedShipping : totalProductPrice;


    setPrice(totalPrice);
  }, [productCart, selectedShipping]);

  useEffect(() => {
    document.body.style.overflow = isMenuCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuCartOpen]);

  const handleSubmits = submit((data) => {
    const cepData = {
      fromCep: "11015230",
      toCep: String(data.cep),
      quantity: productCart.length,
    };
    mutateAsync(cepData);
  });

  return (
    <>
      {isMenuCartOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={toggleMenuCart}
        ></div>
      )}

      <button
        className="hover:opacity-65 transition-all relative"
        onClick={toggleMenuCart}
      >
        <FiShoppingCart className="w-6 h-6" />

        {productsCounter > 0 && (
          <div className="bg-red-500 w-5 h-5 rounded-full flex justify-center items-center absolute bottom-3 left-3.5 ">
            <span className="text-center text-white text-xs">
              {productsCounter}
            </span>
          </div>
        )}
      </button>

      <div
        className={cn(
          `fixed inset-y-0 right-0 bg-white z-50 h-screen w-full sm:w-[540px] transition-transform transform duration-500 ${isMenuCartOpen ? "translate-x-0" : "translate-x-full"
          }`
        )}
      >
        <div className="px-8 flex flex-col h-full">
          <div className="py-6 flex items-center justify-between border-b border-gray-200">
            <h1 className="font-bold text-xl sm:text-2xl tracking-[-1px]">
              Seu carrinho de compras
            </h1>
            <RxCross1
              className="h-6 w-6 font-bold cursor-pointer"
              onClick={toggleMenuCart}
            />
          </div>

          {productCart.length > 0 ? (
            <div className="flex flex-col h-[100vh] ">
              <div className="overflow-y-auto flex-grow max-h-[35vh]">
                <span className="mt-4 block text-base md:text-lg font-semibold tracking-[-0.5px]">
                  {productsCounter} Itens adicionados
                </span>
                {productCart.map((product) => (
                  <div
                    className="border-b mt-1 border-gray-200 py-4 md:h-[200px]  "
                    key={product.id}
                  >
                    <CardCart
                      id={product.id}
                      name={product.name}
                      size={product.size}
                      price={product.price}
                      image={product.image[0]}
                    />
                  </div>
                ))}
              </div>

              <div className="w-full mt-4">
                <div className="flex justify-end items-center gap-2">
                  <span className="uppercase text-sm text-zinc-400">
                    Calcular o frete
                  </span>
                  <form onSubmit={handleSubmits} className="flex relative">
                    <input
                      type="text"
                      placeholder="0000-000"
                      className="h-10 w-32 p-4 py-6 border border-zinc-700/10 rounded-lg outline-black/60"
                      {...register('cep', {
                        required: 'Este campo é obrigatório',
                        minLength: {
                          value: 8,
                          message: 'O CEP deve ter 8 dígitos',
                        },
                        onChange: (e) => {
                          let value = e.target.value.replace(/\D/g, '');

                          if (value.length > 8) {
                            value = value.slice(0, 8);
                          }

                          const formattedValue = value.length > 4 ? `${value.slice(0, 4)}-${value.slice(4)}` : value;
                          e.target.value = formattedValue;
                        },
                        setValueAs: (value) => value.replace('-', ''),
                      })}
                    />

                    <button
                      type="submit"
                      className="h-8 absolute left-[94px] bottom-2 p-2"
                    >
                      <IoIosArrowForward className="hover:opacity-45" />
                    </button>
                  </form>
                </div>

                {cep?.map((result) => (
                  <div
                    key={result.name}
                    className="flex items-center ps-4 h-16 gap-4 border border-gray-200 rounded mt-4 "
                  >
                    <input
                      id={`bordered-radio-${result.name}`}
                      type="radio"
                      value={result.price}
                      {...register("shippingOption")}
                      name="shippingOption"
                      className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <span className="w-full text-sm font-medium text-zinc-700/70">
                          {result.name} -
                        </span>
                        <span className="text-sm font-semibold">{formatCurrency(Number(result.price))}</span>
                      </div>

                      <span className="text-xs mt-1 text-zinc-700/80">Previsão: {result.deliveryTime.max} dias úteis</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-end gap-1">
                <p className="text-right text-sm md:text-lg font-semibold tracking-[-0.5px]">Total a pagar: </p>
                <span className="text-sm md:text-lg font-semibold inline-block">{formatCurrency(price)}</span>
              </div>

              <div className="w-full flex flex-col gap-4 sticky mt-6 sm:mt-48 bottom-0 bg-white py-4">
                <Link
                  to="/carrinho"
                  className="w-full uppercase border rounded-md bg-zinc-800 hover:bg-red-900/90 px-6 h-[49px] flex justify-center items-center text-white font-bold transition-all "
                >
                  Ir Para o Checkout
                </Link>

                {!buttonMobile && (
                  <Button
                    className="w-full uppercase bg-transparent text-black border border-cyan-950 hover:opacity-80 rounded-md h-[49px] "
                    onClick={toggleMenuCart}
                  >
                    continuar comprando
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center mt-8">
              <span className="tracking-[1px] text-lg text-center">Seu Carrinho está vazio</span>
              <p className="tracking-[-0.1px]  text-center mt-2">Volte a loja e aproveite nossas ofertas!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
