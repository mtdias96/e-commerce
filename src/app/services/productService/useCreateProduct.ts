import { ICreateProduct } from "../../../view/pages/AddProduct/useAddProduct";
import httpClient from "../httpClient";

export async function useCreateProduct(product : ICreateProduct){
  console.log(product);
  const {data} = await httpClient.post('/produto/cadastrar', product)
  console.log(data);
  return data
}
