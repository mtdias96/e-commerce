import { createContext, useCallback, useEffect, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

export interface IProductWithSize extends IProduct {
  size: string;
  quantity: number;
}

interface CartContextValue {
  productCart: IProductWithSize[];
  totalPrice: number;
  handleProductCart(product: IProductWithSize): void;
  handleremoveProductList(name: string): void;
}

export const CartContext = createContext({} as CartContextValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productCart, setProductCart] = useState<IProductWithSize[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total: number = productCart.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setTotalPrice(total);
  }, [productCart]);

  const handleProductCart = useCallback((product: IProductWithSize) => {
    setProductCart((prevProductCart) => [...prevProductCart, product]);
  }, []);

  const handleremoveProductList = (id: string) => {
    setProductCart((prevProductCart) =>
      prevProductCart.filter((product) => product.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        handleProductCart,
        productCart,
        handleremoveProductList,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
