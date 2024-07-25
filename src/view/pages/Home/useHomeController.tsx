import { useEffect, useState } from "react";
import { IProduct } from "../../../app/interfaces/IProduct";
import { useProduct } from "../../../app/services/productService/useProduct";


export function useHomeController() {
  const { data: products, isPending } = useProduct();
  const [newCollection, setNewCollection] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products) {
      setNewCollection(products.slice(0, 6));
    }
  }, [products]);

  return { products, newCollection, isPending };
}
