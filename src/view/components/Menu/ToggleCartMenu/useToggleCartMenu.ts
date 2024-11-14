import { useStore } from "../../../../app/store";
import { useShallow } from "zustand/shallow";

export function UseToggleCartMenu() {
  const { isMenuCartOpen, toggleMenuCart, productCart } = useStore(
    useShallow((state) => ({
      isMenuCartOpen: state.cart.isMenuCartOpen,
      toggleMenuCart: state.cart.toggleMenuCart,
      productCart: state.cart.productCart,
    }))
  );

  const productsCounter = productCart.length;

  return { productsCounter, toggleMenuCart, isMenuCartOpen, productCart };
}
