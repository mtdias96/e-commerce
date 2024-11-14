import { useState } from "react";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";
import { To, useNavigate } from "react-router-dom";
import { productService } from "../../../app/services/productService";
import { useStore } from "../../../app/store";
import { useShallow } from "zustand/shallow";

export function useProductInfoController(id: string) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { data: product, isLoading } = productService.useProductId(id);
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

  const { toggleMenuCart, handleProductCart } = useStore(
    useShallow((state) => ({
      toggleMenuCart: state.cart.toggleMenuCart,
      handleProductCart: state.cart.handleProductCart,
    }))
  );

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

  const handleProductAction = (action: () => void) => {
    if (!selectedSize) {
      toast.error("Escolha um tamanho");
      return;
    }

    if (product) {
      const selectedVariation = product.variations.find(
        (v) => v.size === selectedSize
      );
      if (selectedVariation) {
        const productWithSelectedVariation = {
          ...product,
          size: selectedSize,
          quantity,
        };
        handleProductCart(productWithSelectedVariation);
        action();
      }
    }
  };

  const addChekout = (to: To) => {
    handleProductAction(() => navigate(to));
  };

  const addCart = () => {
    handleProductAction(toggleMenuCart);
  };

  return {
    handleMinus,
    handlePus,
    quantity,
    addChekout,
    product,
    handleSelectSize,
    settings,
    isMobile,
    selectedSize,
    addCart,
    isLoading,
  };
}
