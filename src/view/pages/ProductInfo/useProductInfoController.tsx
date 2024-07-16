import { useState } from "react";
import { useCart } from "../../../app/hooks/useCart";
import { productService } from "../../../app/services/productService";


export function useProductInfoController(id: string) {
  const [selectedSize, setSelectedSize] = useState<string>('');
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

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const { handleProductCart } = useCart()

  const addCart = () => {
    if (product) {
      handleProductCart(product)
    }
  }

  console.log(selectedSize);

  return { handleMinus, handlePus, quantity, addCart, product, handleSelectSize }
}
