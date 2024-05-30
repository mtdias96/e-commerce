import { useProducts } from "../../../app/services/productService/getProduct";

export function useProductListController(){
  const { data: products} = useProducts();


  return {products}
}
