// import { useMutation } from "@tanstack/react-query";
// import React, { useEffect, useRef, useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
// import { RxCross1 } from "react-icons/rx";
// import { Link } from "react-router-dom";
// import { cepState, ICepDate } from "../../../../app/interfaces/ICep";
// import { cepService } from "../../../../app/services/CepService";
// import { cn } from "../../../../app/utils/cn";
// import { formatCurrency } from "../../../../app/utils/formatCurrency";
// import { CardCart } from "../../../pages/ProductCart/components/CardCart";
// import { Button } from "../../Button";
// import { UseToggleCartMenu } from "./useToggleCartMenu";

// export function ToggleCartMenu() {
//   const { toggleMenuCart, productsCounter, isMenuCartOpen, productCart } =
//     UseToggleCartMenu();
//   const [cep, setCep] = useState<cepState[]>([]);

//   const inputCepRef = useRef<HTMLInputElement>(null);

//   const cepData = {
//     fromCep: "11015230", // Placeholder values
//     toCep: "11019290",
//     quantity: 2,
//   };

//   const { mutateAsync, data } = useMutation({
//     mutationFn: async (cepData: ICepDate) => {
//       return cepService.cepCalculator(cepData);
//     },
//   });

//   console.log(data);


//   useEffect(() => {
//     if (data) {
//       const filteredCep = data
//         .filter((result) => result.name === "SEDEX" || result.name === "Express")
//         .map((result) => ({
//           name: result.name,
//           price: result.price || "",
//           deliveryTime: result.delivery_range || { min: 0, max: 0 },
//         }));

//       setCep(filteredCep);
//     }
//   }, [data]);


//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     mutateAsync(cepData);
//   }

//   return (
//     <>
//       {isMenuCartOpen && (
//         <div
//           className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
//           onClick={toggleMenuCart}
//         ></div>
//       )}


//       <button
//         className="hover:opacity-65 transition-all relative"
//         onClick={toggleMenuCart}
//       >
//         <FiShoppingCart className="w-6 h-6" />

//         {productsCounter > 0 && (
//           <div className="bg-red-500 w-5 h-5 rounded-full flex justify-center items-center absolute bottom-3 left-3.5 ">
//             <span className="text-center text-white text-xs">
//               {productsCounter}
//             </span>
//           </div>
//         )}
//       </button>

//       <div
//         className={cn(
//           `fixed inset-y-0 right-0 bg-white z-50 h-screen w-full sm:w-[540px] transition-transform transform duration-500 ${isMenuCartOpen ? "translate-x-0" : "translate-x-full"
//           }`
//         )}
//       >
//         <div className="px-8">
//           <div className="py-6 flex items-center justify-between border-b border-gray-200">
//             <h1 className="font-bold text-xl sm:text-2xl tracking-[-1px]">
//               Seu carrinho de compras
//             </h1>
//             <RxCross1
//               className="h-6 w-6 font-bold cursor-pointer"
//               onClick={toggleMenuCart}
//             />
//           </div>

//           <div className="overflow-y-auto">
//             <span className=" mt-4 block text-base md:text-lg font-semibold tracking-[-0.5px]">
//               {productsCounter} Itens adicionados
//             </span>
//             {productCart.length > 0 &&
//               productCart.map(
//                 (product) => (
//                   (
//                     <div
//                       className="border-b border-gray-200 py-8 overflow-y-auto"
//                       key={product.id}
//                     >
//                       <CardCart
//                         id={product.id}
//                         name={product.name}
//                         size={product.size}
//                         price={product.price}
//                         image={product.image[0]}
//                       />
//                     </div>
//                   )
//                 )
//               )}
//           </div>

//           <div className="w-full mt-8">
//             <div className="flex justify-end items-center gap-2">
//               <span className="uppercase text-sm text-zinc-400">
//                 Calcular o frete
//               </span>
//               <div>
//                 <form onSubmit={handleSubmit} className="flex relative">
//                   <input
//                     name="cep"
//                     type="text"
//                     placeholder="0000-000"
//                     className="h-10 w-32 p-4 py-6 border border-zinc-700/10 rounded-lg outline-black/60"
//                     ref={inputCepRef}
//                   />
//                   <button
//                     type="submit"
//                     className="h-8 absolute left-[94px] bottom-2 p-2"
//                   >
//                     <IoIosArrowForward className="hover:opacity-45" />
//                   </button>
//                 </form>
//               </div>
//             </div>

//             {cep?.map((result) => (
//               <div
//                 key={result.name}
//                 className="flex items-center ps-4 h-16 gap-4 border border-gray-200 rounded dark:border-gray-700 mt-4 "
//               >
//                 <input
//                   checked
//                   id="bordered-radio-2"
//                   type="radio"
//                   value=""
//                   name="bordered-radio"
//                   className="w-4 h-4 0 bg-gray-100 border-gray-300 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
//                 />

//                 <div className="flex flex-col items-center ">
//                   <div className="flex items-center gap-1">
//                     <span className="w-full text-sm font-medium text-zinc-700/70 ">
//                       {result.name} -
//                     </span>
//                     <span className="text-sm font-semibold">{formatCurrency(Number(result.price))}</span>
//                   </div>

//                   <span className="text-xs mt-1 text-zinc-700/80">Previsão: {result.deliveryTime.max} dias útil</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="px-4 w-full flex flex-col gap-4 mt-4 ">
//           <Link
//             to="/carrinho"
//             className="w-full uppercase bg-red-800/90 hover:bg-red-900/90 px-6 h-12 rounded-xl flex justify-center items-center text-white font-bold transition-all"
//           >
//             Ir Para o Chekout
//           </Link>

//           <Button
//             className="w-full uppercase bg-transparent text-black border border-cyan-950 hover:opacity-80"
//             onClick={toggleMenuCart}
//           >
//             continuar comprando
//           </Button>
//         </div>
//       </div>

//     </>
//   );
// }


import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { cepState, ICepDate } from "../../../../app/interfaces/ICep";
import { cepService } from "../../../../app/services/CepService";
import { cn } from "../../../../app/utils/cn";
import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { CardCart } from "../../../pages/ProductCart/components/CardCart";
import { Button } from "../../Button";
import { UseToggleCartMenu } from "./useToggleCartMenu";

export function ToggleCartMenu() {
  const { toggleMenuCart, productsCounter, isMenuCartOpen, productCart } =
    UseToggleCartMenu();
  const [cep, setCep] = useState<cepState[]>([]);

  const inputCepRef = useRef<HTMLInputElement>(null);

  const cepData = {
    fromCep: "11015230",
    toCep: "11019290",
    quantity: 2,
  };

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

  useEffect(() => {
    document.body.style.overflow = isMenuCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuCartOpen]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutateAsync(cepData);
  }

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

          <div className="overflow-y-auto flex-grow">
            <span className="mt-4 block text-base md:text-lg font-semibold tracking-[-0.5px]">
              {productsCounter} Itens adicionados
            </span>
            {productCart.length > 0 &&
              productCart.map(
                (product) => (
                  <div
                    className="border-b border-gray-200 py-8"
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
                )
              )}
          </div>

          <div className="w-full mt-8">
            <div className="flex justify-end items-center gap-2">
              <span className="uppercase text-sm text-zinc-400">
                Calcular o frete
              </span>
              <form onSubmit={handleSubmit} className="flex relative">
                <input
                  name="cep"
                  type="text"
                  placeholder="0000-000"
                  className="h-10 w-32 p-4 py-6 border border-zinc-700/10 rounded-lg outline-black/60"
                  ref={inputCepRef}
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
                className="flex items-center ps-4 h-16 gap-4 border border-gray-200 rounded  mt-4 "
              >
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 0 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />

                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    <span className="w-full text-sm font-medium text-zinc-700/70">
                      {result.name} -
                    </span>
                    <span className="text-sm font-semibold">{formatCurrency(Number(result.price))}</span>
                  </div>

                  <span className="text-xs mt-1 text-zinc-700/80 text-r">Previsão: {result.deliveryTime.max} dias útil</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-end gap-1">
            <p className="text-right text-xs md:text-lg font-semibold tracking-[-0.5px]">Total a pagar: </p>
            <span className="text-sm md:text-lg font-semibold inline-block">{formatCurrency(1800.44)}</span>
          </div>

          <div className="w-full flex flex-col gap-4 mt-4 sticky bottom-0 bg-white py-4">
            <Link
              to="/carrinho"
              className="w-full uppercase border rounded-md   bg-zinc-800  hover:bg-red-900/90 px-6 h-[49px] flex justify-center items-center text-white font-bold transition-all "
            >
              Ir Para o Chekout
            </Link>

            <Button
              className="w-full uppercase bg-transparent text-black border border-cyan-950 hover:opacity-80 rounded-md h-[49px] "
              onClick={toggleMenuCart}
            >
              continuar comprando
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
