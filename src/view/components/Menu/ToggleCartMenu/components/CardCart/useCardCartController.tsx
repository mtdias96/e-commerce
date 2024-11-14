import { useState } from "react";
import { useStore } from "../../../../../../app/store";
import { useShallow } from "zustand/shallow";

export function useCardCartController() {
  const [quantity, setQuantity] = useState(1);

  const { handleremoveProductList } = useStore(
    useShallow((state) => ({
      handleremoveProductList: state.cart.handleremoveProductList,
    }))
  );

  function handlePus() {
    setQuantity((prevState: number) => prevState + 1);
  }

  function handleCLoseProduct(id: string) {
    handleremoveProductList(id);
  }

  function handleMinus() {
    setQuantity((prevState: number) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  }

  return { handleMinus, handlePus, quantity, handleCLoseProduct };
}
