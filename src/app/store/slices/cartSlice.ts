import { IProductWithSize } from "../../interfaces/IProduct";
import { StoreSlice } from "../Store";

type CartStore = {
  isMenuCartOpen: boolean;
  productCart: IProductWithSize[];
  totalPrice: number;
};

type CartActions = {
  toggleMenuCart: () => void;
  handleProductCart: (product: IProductWithSize) => void;
  handleremoveProductList: (id: string) => void;
  calculateTotal: () => void;
};

export type CartSlice = CartStore & CartActions;

export const createCartSlice: StoreSlice<CartSlice> = (set) => ({
  isMenuCartOpen: false,
  productCart: [],
  totalPrice: 0,

  toggleMenuCart: () =>
    set((state) => {
      state.cart.isMenuCartOpen = !state.cart.isMenuCartOpen;
    }),

  handleProductCart: (product: IProductWithSize) =>
    set((state) => {
      const existingProductIndex = state.cart.productCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingProductIndex !== -1) {
        state.cart.productCart[existingProductIndex].quantity =
          (state.cart.productCart[existingProductIndex].quantity || 0) + 1;
      } else {
        state.cart.productCart.push({ ...product, quantity: 1 });
      }

      const total = state.cart.productCart.reduce((sum, item) => {
        return sum + item.price * (item.quantity || 1);
      }, 0);

      state.cart.totalPrice = total;
    }),

  handleremoveProductList: (id: string) =>
    set((state) => {
      const updatedCart = state.cart.productCart.filter(
        (product) => product.id !== id
      );

      const total = updatedCart.reduce((sum, item) => {
        return sum + item.price * (item.quantity || 1);
      }, 0);

      state.cart.productCart = updatedCart;
      state.cart.totalPrice = total;
    }),

  calculateTotal: () =>
    set((state) => {
      const total = state.cart.productCart.reduce((sum, product) => {
        return sum + product.price * (product.quantity || 1);
      }, 0);

      state.cart.totalPrice = total;
    }),
});
