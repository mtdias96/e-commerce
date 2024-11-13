import { StoreSlice } from "../Store";

type CartStore = {
  isMenuCartOpen: boolean;
};

type CartActions = {
  toggleMenuCart: () => void;
};

export type CartSlice = CartStore & CartActions;

export const createCartSlice: StoreSlice<CartSlice> = (set) => ({
  isMenuCartOpen: false,
  toggleMenuCart: () =>
    set((prevState) => {
      prevState.cart.isMenuCartOpen = !prevState.cart.isMenuCartOpen;
    }),
});
