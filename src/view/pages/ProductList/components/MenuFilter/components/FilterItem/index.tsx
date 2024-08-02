import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { cn } from "../../../../../../../app/utils/cn";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { useItemController } from "./useItemController";

type FilterItemProps = {
  title: string;
  options?: string[];
  sizes?: string[];
};

export function FilterItem({ title, options, sizes }: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOption, handleCheckboxChange } = useItemController(title);

  return (
    <div className="mb-4 py-6 pr-2 border-b border-gray-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        className={cn('overflow-hidden transition-max-height duration-[50000ms] ease-out', isOpen ? 'max-h-screen' : 'max-h-0', !isOpen && 'max-h-0')}
      >
        {isOpen && sizes && (
          <div className="flex flex-wrap gap-2 mt-4">
            {sizes.map((size) => (
              <Button
                key={size}
                onClick={() => handleCheckboxChange(size)}
                className="w-14 h-6 py-4 px-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:bg-black focus:text-white text-xs transition-all bg-transparent"
              >
                {size}
              </Button>
            ))}
          </div>
        )}
        {isOpen && options && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center bg-red-0">
                <Input
                  type="checkbox"
                  id={option}
                  name={option}
                  onChange={() => handleCheckboxChange(option)}
                  checked={selectedOption === option}
                  className="w-4 h-4 mr-2 flex"
                />
                <label
                  className="text-sm flex flex-1 tracking-[1px]"
                  htmlFor={option}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
