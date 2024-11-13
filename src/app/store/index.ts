import { create } from "zustand";
import { Store } from "./Store";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./slices/cartSlice";

export const useStore = create<Store>()(
  devtools(
    immer((...params) => ({
      cart: createCartSlice(...params),
    })),
    {
      enabled: import.meta.env.DEV,
    }
  )
);
