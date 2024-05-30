import { useQuery, useQueryClient } from '@tanstack/react-query';
import httpClient from '../httpClient';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  size: string[];
  color: string[];
  description: string;
  quantity: number;
  image: number[];
  categoryId: number;
  brand: string;
}


export interface IProductId {
  product: IProduct;
  id: number;
}

export async function getProducts(): Promise<IProduct[]> {
  const { data } = await httpClient.get<IProduct[]>('/produtos');
  return data;
}

export const useProducts = () => {
  return useQuery<IProduct[], Error>(['produtos'], getProducts);
};

export async function fetchProductById(id: number): Promise<IProductId> {
  const { data } = await httpClient.get<IProductId>(`/produto/${id}`);
  return data;
}

export const useProductId = (id: number) => {
  const queryClient = useQueryClient();
  const queryKey = ['product', id];

  return useQuery<IProductId, Error>(queryKey, () => fetchProductById(id), {
    initialData: () => {
      const productId = queryClient.getQueryData<IProductId[]>(['produtos']);
      const product = productId?.find(product => product.id === id);
      return product
    },
  });
};
