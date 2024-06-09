import { useEffect, useState } from "react";
import { useCart } from "../../../app/hooks/useCart";
import { useDiscount } from "../../../app/hooks/useDiscount";


export function useProductCartController() {
  const [priceProducts, setPriceProducts] = useState(0)
  // const [priceTotal, setPriceTotal] = useState(0)
  const { productCart } = useCart();
  const { valueDiscount, discountedValue } = useDiscount(priceProducts)

  useEffect(() => {
    const total = productCart.reduce((acc, product) => acc + product.price, 0)
    setPriceProducts(total)
  }, [productCart])

  // useEffect(() => {
  //   const value = Number(valueDiscount)
  //   const totalWithDiscount = priceProducts - value;
  //   setPriceTotal(totalWithDiscount);
  // }, [priceProducts, valueDiscount]);

  console.log(discountedValue);



  return { productCart, priceProducts, valueDiscount, discountedValue };
}
