import { useStore } from "../../../../app/store";
import { useCart } from "../../../../app/hooks/useCart";
import { useShallow } from "zustand/shallow";

export function UseToggleCartMenu() {
  const { productCart } = useCart();
  const productsCounter = productCart.length;

  const { isMenuCartOpen, toggleMenuCart } = useStore(
    useShallow((state) => ({
      isMenuCartOpen: state.cart.isMenuCartOpen,
      toggleMenuCart: state.cart.toggleMenuCart,
    }))
  );

  return { productsCounter, toggleMenuCart, isMenuCartOpen, productCart };
}
