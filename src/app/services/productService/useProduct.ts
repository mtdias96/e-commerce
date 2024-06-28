import { useQuery } from "@tanstack/react-query";

import { IProduct } from "../../interfaces/IProduct";
import httpClient from "../httpClient";

export function useProduct() {
  return useQuery<IProduct[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await httpClient.get('/produto');
      return response.data;
    }
  });
}
