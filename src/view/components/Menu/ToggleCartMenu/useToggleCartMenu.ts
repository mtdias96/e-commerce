import { useCart } from "../../../../app/hooks/useCart";

export function UseToggleCartMenu(){
  const { productCart } = useCart()
  const productsCounter = productCart.length;

  const { toggleMenuCart, isMenuCartOpen } = useCart();


  return {productsCounter, toggleMenuCart, isMenuCartOpen, productCart}
}
