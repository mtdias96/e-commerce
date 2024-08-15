import { useEffect, useState } from "react";
import { useCart } from "../../../app/hooks/useCart";
import { useDiscount } from "../../../app/hooks/useDiscount";


export function useProductCartController() {
  const [priceProducts, setPriceProducts] = useState(0)
  const { productCart } = useCart();
  const { valueDiscount, discountedValue } = useDiscount(priceProducts)

  useEffect(() => {
    const total = productCart.reduce((acc, product) => acc + product.price, 0)
    setPriceProducts(total)
  }, [productCart])



  return { productCart, priceProducts, valueDiscount, discountedValue };
}


