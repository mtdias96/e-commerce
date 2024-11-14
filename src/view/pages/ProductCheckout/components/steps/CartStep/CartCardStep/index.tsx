import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { formatCurrency } from "../../../../../../../app/utils/formatCurrency";
import imgGroup from "../../../../../../../app/utils/imgGroup";
import { useCartCardSteps } from "./useCartCardStep";

interface CardCartProps {
  id: string;
  name: string;
  price: number;
  size: string;
  image?: number;
  className?: string;
  handleremoveProductList(id: string): void;
}

export function CartCardStep({
  name,
  image,
  price,
  size,
  id,
  handleremoveProductList,
}: CardCartProps) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 850px)",
  });

  const { counterProduct, handleMinus, handlePlus } = useCartCardSteps();

  return (
    <div>
      {!isDesktop && (
        <div className="mt-5 flex justify-between w-full pt-4 h-36">
          <div className="flex gap-4">
            <div className="max-w-[84px] max-h-[84px]">
              <img
                src={imgGroup[image || 0]}
                alt="Product Image"
                className="min-w-[5px] min-h-[5px] rounded-md flex-1"
              />
            </div>

            <div className="flex flex-col gap-3.5 text-sm">
              <h3 className="font-bold uppercase text-zinc-700 tracking-[-0.02px] leading-tight">
                TÊNIS {name} - <span className="">{size}</span>
              </h3>

              <span className="text-sm md:text-lg font-bold text-zinc-600">
                {formatCurrency(price)}
              </span>

              <div className="flex md:mt-0 ">
                <div className="flex items-center justify-between gap-3 ">
                  <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                    <FaMinus
                      onClick={handleMinus}
                      className="h-3 w-3 text-zinc-800"
                    />
                  </button>

                  <span className="text-sm  mx-4 text-zinc-800 font-bold">
                    {counterProduct}
                  </span>

                  <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                    <FaPlus
                      onClick={handlePlus}
                      className="h-3 w-3 text-zinc-800"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => handleremoveProductList(id || "")}
              className="ml-4 focus:outline-none"
            >
              <FiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="flex items-start justify-between gap-4 h-28">
          <div className="flex gap-4">
            <div className="w-20 h-20">
              <img
                src={imgGroup[image || 0]}
                alt="Product Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold uppercase text-zinc-700">
                TÊNIS {name} - <span className="">{size}</span>
              </h3>
              <span className="text-sm">Produto fornecido por NEWBOOT </span>
            </div>
          </div>

          <div className="flex justify-between items-center w-96 gap-4 px-6 relative">
            <span className="text-sm font-medium text-zinc-600">
              {formatCurrency(price)}
            </span>

            <div className="flex items-center">
              <button
                onClick={handleMinus}
                className="text-lg text-gray-500 focus:outline-none"
              >
                <FaMinus className="h-4 w-4 text-zinc-800" />
              </button>

              <span className="text-sm mx-4 text-zinc-800 font-bold">
                {counterProduct}
              </span>

              <button
                onClick={handlePlus}
                className="text-lg text-gray-500 focus:outline-none"
              >
                <FaPlus className="h-4 w-4 text-zinc-800" />
              </button>
            </div>

            <span className="text-sm font-bold text-zinc-600">
              {formatCurrency(price * counterProduct)}
            </span>
            <button
              onClick={() => handleremoveProductList(id || "")}
              className="ml-4 focus:outline-none absolute right-[-10px] "
            >
              <FiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
