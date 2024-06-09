import { createContext, useCallback, useState } from "react";

export interface IProduct {
  name: string;
  price: number;
  size: string[];
  color: string[];
  image: number[];
  brand: string;
}

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

  console.log(productCart);

  return (
    <CartContext.Provider
      value={{ handleProductCart, productCart, handleremoveProductList }}
    >
      {children}
    </CartContext.Provider>
  );
};
