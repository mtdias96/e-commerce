import { useEffect, useState } from "react";
import { useFilter } from "../../../../../../../app/hooks/useFilter";
import httpClient from "../../../../../../../app/services/httpClient";


type FilterOption = {
  title?: string;
  option?: string;
};

type Filters = {
  brand?: string;
  color?: string;
  size?: string;
};

export function useItemController(title: string) {
  const [valueSelected, setValueSelected] = useState<FilterOption[]>([]);
  const { handleProductFilter } = useFilter()
  const {handleTagFilter, tagFilter} = useFilter();

  function filterSelected(option: FilterOption) {
    const existingItemIndex = valueSelected.findIndex(item => item.title === option.title);

    if (existingItemIndex !== -1) {
      const updatedSelected = [...valueSelected];
      updatedSelected[existingItemIndex] = option;
      setValueSelected(updatedSelected);
    } else {
      setValueSelected(prevState => [...prevState, option]);
    }
  }

  const selectedOption = valueSelected.find(item => item.title === title)?.option;

  const handleCheckboxChange = (option: string) => {
    filterSelected({ title, option });
    handleTagFilter(option);
  };

  useEffect(() => {
    const filters: Filters = valueSelected.reduce((acc, { title, option }) => {
      if (title === "Marcas") acc.brand = option;
      if (title === "Cores") acc.color = option;
      if (title === "Tamanhos") acc.size = option;
      console.log(option);
      return acc;
    }, {} as Filters);
    if (Object.keys(filters).length > 0) {
      httpClient.post("/produto/filtro", filters)
        .then(response => {
          handleProductFilter(response.data)
        })
        .catch(error => {
          console.error("Error ao enviar filtros:", error);
        });
    }
  }, [valueSelected, handleProductFilter]);
  console.log(tagFilter);
  return { valueSelected, filterSelected, selectedOption, handleCheckboxChange };
}
