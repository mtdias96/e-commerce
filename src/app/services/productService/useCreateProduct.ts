import { ICreateProduct } from "../../../view/pages/AddProduct/useAddProduct";
import httpClient from "../httpClient";

export async function useCreateProduct(product : ICreateProduct){
  const {data} = await httpClient.post('/produto/cadastrar', product)

  return data
}
