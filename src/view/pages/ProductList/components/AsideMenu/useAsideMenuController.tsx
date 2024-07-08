import { useEffect, useState } from "react";
import { useFilter } from "../../../../../app/hooks/useFilter";
import httpClient from "../../../../../app/services/httpClient";

type FilterOption = {
  title: string;
  option: string;
};

type Filters = {
  brand?: string;
  color?: string;
  size?: string;
};

export function useAsideMenuController() {
  const [valueSelected, setValueSelected] = useState<FilterOption[]>([]);

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

  const { handleProductFilter } = useFilter()

  useEffect(() => {
    const filters: Filters = valueSelected.reduce((acc, { title, option }) => {
      if (title === "Marcas") acc.brand = option;
      if (title === "Cores") acc.color = option;
      if (title === "Tamanhos") acc.size = option;
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
  }, [valueSelected]);



  return { valueSelected, filterSelected };
}
