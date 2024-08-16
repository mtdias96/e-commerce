import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";

import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import imgGroup from "../../../../../../app/utils/imgGroup";

type CardCartProps = {
  id?: string;
  name: string;
  price: number;
  size: string;
  image: number;
  className?: string;
};

export function CartCardStep({ image, price, size, id, name }: CardCartProps) {
  return (
    <div>
      <div className="mt-5 flex justify-between w-full border-1 border-b  pt-4 h-36">
        <div className="flex gap-4">
          <div className="max-w-[84px] max-h-[84px]">
            <img
              src={imgGroup[5]}
              alt="Product Image"
              className="min-w-[5px] min-h-[5px] rounded-md flex-1"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className=" md:text-lg font-bold uppercase text-zinc-700 tracking-[-0.02px] leading-tight">
              Tênis nike air force 1 masculino - <span>{48}</span>
            </h3>

            <span className="text-sm md:text-lg font-bold text-zinc-600">
              {formatCurrency(1200)}
            </span>

            <div className="flex md:mt-0 ">
              <div className="flex items-center justify-between gap-3 ">
                <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                  <FaMinus className="h-3 w-3 text-zinc-800" />
                </button>
                <span className="text-sm  mx-4 text-zinc-800 font-bold">
                  {8}
                </span>
                <button className="text-lg md:text-xl text-gray-500 focus:outline-none">
                  <FaPlus className="h-3 w-3 text-zinc-800" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="ml-4  focus:outline-none">
            <FiTrash className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
