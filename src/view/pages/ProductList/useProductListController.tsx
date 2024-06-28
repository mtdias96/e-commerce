import { productService } from "../../../app/services/productService";


export function useProductListController() {
  const { data: products } = productService.useProduct();

  return { products }
}
