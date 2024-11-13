import { StateCreator } from "zustand";
import { CartSlice } from "./slices/cartSlice";

export type Store = {
  cart: CartSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  TSlice
>;
