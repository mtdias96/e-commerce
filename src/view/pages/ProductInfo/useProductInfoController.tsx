import { useState } from "react";
import { useCart } from "../../../app/hooks/useCart";
import { useProductId } from "../../../app/services/productService/getProduct";


export function useProductInfoController(productId: number) {
  const { data } = useProductId(productId);
  const [quantity, setQuantity] = useState(0)
  const product = data?.product

  function handlePus() {
    setQuantity((prevState: number) => prevState + 1)
  }

  function handleMinus() {
    setQuantity((prevState: number) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  }

  const { handleProductCart } = useCart()

  const addCart = () => {
    if (product) {
      handleProductCart(product)
    }
  }

  return { handleMinus, handlePus, quantity, product, addCart }
}
