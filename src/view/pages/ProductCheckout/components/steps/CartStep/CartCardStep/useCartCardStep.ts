
import { useEffect, useState } from "react";

export function useCartCardSteps(price: number) {
  const [counterProduct, setCounterProduct] = useState(1);
  const [totalPriceQuantity] = useState<number>(0);
  const [teste, setTeste] = useState<number[]>([])

  function handlePlus() {
    setTeste((prevState) => [...prevState, price]);
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

  useEffect(() => {
    setTeste((prevState) => [...prevState, price]);

  }, [price]);

console.log(teste);

  return { counterProduct, handleMinus, handlePlus, totalPriceQuantity };
}






