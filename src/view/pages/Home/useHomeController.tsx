import { useEffect, useState } from "react";
import { IProduct, useProducts } from "../../../app/services/productService/getProduct";

export function useHomeController() {
  const { data: products, error, isLoading } = useProducts();
  const [newCollection, setNewCollection] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products) {
      setNewCollection(products.slice(0, 6));
    }
  }, [products]);

  return { products, error, isLoading, newCollection };
}
