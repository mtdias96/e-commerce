import { createContext, useCallback, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface FilterContextValue {
  handleTagFilter(tags: string): void
  handleTagRemove(tagRemove: string): void
  handleProductFilter(products: IProduct[]): void;
  clearAllFilters(): void
  productFilter: IProduct[];
  tagFilter: string[]
}

export const FilterContext = createContext({} as FilterContextValue)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [productFilter, setProductFilter] = useState<IProduct[]>([]);
  const [tagFilter, setTagFilter] = useState<string[]>([])

  const handleProductFilter = useCallback((products: IProduct[]) => {
    const filteredProducts = products.filter(product => product.variations.some(variation => variation.quantity > 0))
    setProductFilter(filteredProducts);
  }, []);

  const handleTagFilter = useCallback((tags: string) => {
    setTagFilter((prevState) => {
      return [...new Set([...prevState, tags])]
    })
  }, [])

  const handleTagRemove = useCallback((tagRemove: string) => {
    setTagFilter((prevState) => prevState.filter(tag => tag !== tagRemove))
  }, [])

  const clearAllFilters = useCallback(() => {
    setProductFilter([]);
    setTagFilter([]);
  }, []);

  return (
    <FilterContext.Provider value={{ productFilter, handleProductFilter, tagFilter, handleTagFilter, handleTagRemove, clearAllFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
