import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useAsideMenuController } from "./useAsideMenuController";

type FilterItemProps = {
  title: string;
  options: string[];
}

export function FilterItem({ title, options }: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { filterSelected } = useAsideMenuController()
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="mt-2 pl-4">
          {options.map((option, index) => (
            <div key={index} className="my-1">
              <input
                type="checkbox"
                id={option}
                name={option}
                onClick={() => filterSelected(option)}
                className="mr-2" />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
