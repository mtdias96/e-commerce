import { useState } from "react";
import { useCart } from "../../../../app/hooks/useCart";

export function UseToggleCartMenu(){
  const [isMenuCartOpen, setIsMenuCartOpen] = useState<boolean>(false);
  const { productCart } = useCart()
  const productsCounter = productCart.length;

  function toggleMenuCart() {
    setIsMenuCartOpen(!isMenuCartOpen);
  }

  return {productsCounter, toggleMenuCart, isMenuCartOpen, productCart}
}
