// FilterItem.tsx

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Input } from "../../../../components/Input";
import { useAsideMenuController } from "./useAsideMenuController";

type FilterItemProps = {
  title: string;
  options: string[];
};

export function FilterItem({ title, options }: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { filterSelected, valueSelected } = useAsideMenuController();

  const handleCheckboxChange = (option: string) => {
    filterSelected({ title, option });
  };

  const selectedOption = valueSelected.find(item => item.title === title)?.option;

  return (
    <div className="mb-4 p-6 border-b border-gray-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold ">{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <Input
                type="checkbox"
                id={option}
                name={option}
                onChange={() => handleCheckboxChange(option)}
                checked={selectedOption === option}
                className="w-4 h-4 mr-2 flex"
              />
              <label
                className="text-xs font-medium flex flex-1"
                htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

