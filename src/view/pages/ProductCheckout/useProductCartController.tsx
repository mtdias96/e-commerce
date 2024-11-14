import { useMemo } from "react";
import { useDiscount } from "../../../app/hooks/useDiscount";
import { useStore } from "../../../app/store";
import { useShallow } from "zustand/shallow";

export function useProductCartController() {
  const { productCart, totalPrice } = useStore(
    useShallow((state) => ({
      productCart: state.cart.productCart,
      totalPrice: state.cart.totalPrice,
    }))
  );
  const { valueDiscount, discountedValue } = useDiscount(totalPrice);

  return useMemo(
    () => ({
      productCart,
      totalPrice,
      valueDiscount,
      discountedValue,
    }),
    [productCart, totalPrice, valueDiscount, discountedValue]
  );
}
