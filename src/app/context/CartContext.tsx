// import { createContext, useCallback, useState } from "react";
// import { IProduct } from "../interfaces/IProduct";


// interface CartContextValue {
//   handleProductCart(product: IProduct, size: string): void;
//   productCart: IProduct[];
//   handleremoveProductList(name: string): void;
// }

// export const CartContext = createContext({} as CartContextValue);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [productCart, setProductCart] = useState<IProduct[]>([]);

//   const handleProductCart = useCallback((product: IProduct, size: string) => {
//     console.log(size);
//     setProductCart((prevProductCart) => [...prevProductCart, product])
//   }, []);

//   const handleremoveProductList = (name: string) => {
//     setProductCart((prevProductCart) =>
//       prevProductCart.filter((product) => product.name !== name)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ handleProductCart, productCart, handleremoveProductList }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



import { createContext, useCallback, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface IProductWithSize extends IProduct {
  size: string;
  quantity: number;
}

interface CartContextValue {
  handleProductCart(product: IProductWithSize): void;
  productCart: IProductWithSize[];
  handleremoveProductList(name: string): void;
}

export const CartContext = createContext({} as CartContextValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productCart, setProductCart] = useState<IProductWithSize[]>([]);

  const handleProductCart = useCallback((product: IProductWithSize) => {
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
