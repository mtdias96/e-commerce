import { useState } from "react";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import { To, useNavigate } from "react-router-dom";
import { useCart } from "../../../app/hooks/useCart";
import { productService } from "../../../app/services/productService";

export function useProductInfoController(id: string) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { data: product } = productService.useProductId(id);
  const [quantity, setQuantity] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 727 });
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();

  function handlePus() {
    setQuantity((prevState: number) => prevState + 1);
  }

  function handleMinus() {
    setQuantity((prevState: number) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  }

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const { handleProductCart } = useCart();

  const addCart = (to: To) => {
    if (!selectedSize) {
      toast.error('Escolha um tamanho');
      return;
    }

    if (product) {
      const selectedVariation = product.variations.find(v => v.size === selectedSize);
      if (selectedVariation) {
        const productWithSelectedVariation = {
          ...product,
          size: selectedSize,
          quantity
        };
        handleProductCart(productWithSelectedVariation);
          navigate(to);
      }
    }
  };


  return { handleMinus, handlePus, quantity, addCart, product, handleSelectSize, settings, isMobile, selectedSize };
}
