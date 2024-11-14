import { useState } from "react";

export function useCartCardSteps() {
  const [counterProduct, setCounterProduct] = useState(1);
  const [totalPriceQuantity] = useState<number>(0);

  function handlePlus() {
    setCounterProduct((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounterProduct((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  }

  return { totalPriceQuantity, handleMinus, handlePlus, counterProduct };
}
