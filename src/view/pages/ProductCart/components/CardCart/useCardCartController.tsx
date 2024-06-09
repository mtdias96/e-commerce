import { useState } from "react";
import { useCart } from "../../../../../app/hooks/useCart";

export function useCardCartController() {
  const [quantity, setQuantity] = useState(1)
  const { handleremoveProductList } = useCart();

  function handlePus() {
    setQuantity((prevState: number) => prevState + 1)
  }

  function handleCLoseProduct(name: string) {
    handleremoveProductList(name)
  }

  function handleMinus() {
    setQuantity((prevState: number) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  }


  return { handleMinus, handlePus, quantity, handleCLoseProduct }
}
