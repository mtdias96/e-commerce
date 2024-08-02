import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { cn } from "../../../../../../../app/utils/cn";
import { Button } from "../../../../../../components/Button";
import { Input } from "../../../../../../components/Input";
import { useItemController } from "./useItemController";

type FilterItemProps = {
  title: string;
  options?: string[];
  sizes?: string[];
  className?: string;
};

export function FilterItem({ title, options, sizes, className }: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOption, handleCheckboxChange } = useItemController(title);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isOpen, options, sizes]);

  return (
    <div className="mb-4 py-6 pr-2 border-b border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div
        ref={contentRef}
        className={cn`overflow-hidden transition-all duration-500 ease-out`}
        style={{ height: isOpen ? contentHeight : '0px' }}
      >
        {isOpen && sizes && (
          <div className="flex flex-wrap gap-2 mt-4">
            {sizes.map((size) => (
              <Button
                key={size}
                onClick={() => handleCheckboxChange(size)}
                className="w-14 h-6 py-4 px-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:bg-black focus:text-white text-xs transition-all bg-transparent font-semibold"
              >
                {size}
              </Button>
            ))}
          </div>
        )}
        {isOpen && options && (
          <div className={cn("mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 mx-1", className)}>
            {options.map((option, index) => (
              <div key={index} className="flex items-center">
                <Input
                  type="checkbox"
                  id={option}
                  name={option}
                  onChange={() => handleCheckboxChange(option)}
                  checked={selectedOption === option}
                  className="w-5 h-4 mr-2 flex border-2"
                />
                <label
                  className="text-sm flex flex-1 tracking-[1px] font-semibold"
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
