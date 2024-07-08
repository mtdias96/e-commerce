import { createContext, useCallback, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface FilterContextValue {
  handleProductFilter(products: IProduct[]): void;
  productFilter: IProduct[];
}

export const FilterContext = createContext({} as FilterContextValue)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [productFilter, setProductFilter] = useState<IProduct[]>([]);

  const handleProductFilter = useCallback((products: IProduct[]) => {
    const filteredProducts = products.filter(product => product.variations.some(variation => variation.quantity > 0))
    setProductFilter(filteredProducts);
  }, []);

  return (
    <FilterContext.Provider value={{ productFilter, handleProductFilter }} >
      {children}
    </FilterContext.Provider>
  )
}
