import { useState } from "react";
import { useCart } from "../../../app/hooks/useCart";
import { productService } from "../../../app/services/productService";


export function useProductInfoController(id: string) {
  const { data: product } = productService.useProductId(id);
  const [quantity, setQuantity] = useState(0)


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

  return { handleMinus, handlePus, quantity, addCart, product }
}
