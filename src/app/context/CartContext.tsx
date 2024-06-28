import { createContext, useCallback, useState } from "react";
import { IProduct } from "../interfaces/IProduct";


interface CartContextValue {
  handleProductCart(product: IProduct): void;
  productCart: IProduct[];
  handleremoveProductList(name: string): void;
}

export const CartContext = createContext({} as CartContextValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productCart, setProductCart] = useState<IProduct[]>([]);

  const handleProductCart = useCallback((product: IProduct) => {
    setProductCart((prevProductCart) => [...prevProductCart, product]);
  }, []);

  const handleremoveProductList = (name: string) => {
    setProductCart((prevProductCart) =>
      prevProductCart.filter((product) => product.name !== name)
    );
  };

  return (
    <CartContext.Provider
      value={{ handleProductCart, productCart, handleremoveProductList }}
    >
      {children}
    </CartContext.Provider>
  );
};
