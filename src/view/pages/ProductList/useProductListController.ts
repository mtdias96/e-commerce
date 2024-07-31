import { productService } from "../../../app/services/productService";


export function useProductListController() {
  const { data: products, isPending } = productService.useProduct();

  return { products, isPending }
}
