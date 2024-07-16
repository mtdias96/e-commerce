import { useQuery } from "@tanstack/react-query";

import { IProduct } from "../../interfaces/IProduct";
import httpClient from "../httpClient";


export function useProductId(productId: string){
  return useQuery<IProduct>({
    queryKey: ['product', productId],
    queryFn: async () => {
      const response = await httpClient.get(`/produto/:${productId}`);
      return response.data.product;
    },
    enabled: !!productId,
})
}
