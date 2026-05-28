import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/products";

export type CartItem = { product: Product; qty: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      add: (product, qty = 1) => {
        const items = [...get().items];
        const i = items.findIndex((x) => x.product.id === product.id);
        if (i >= 0) items[i] = { ...items[i], qty: items[i].qty + qty };
        else items.push({ product, qty });
        set({ items, isOpen: true });
      },
      remove: (id) => set({ items: get().items.filter((x) => x.product.id !== id) }),
      setQty: (id, qty) =>
        set({
          items: get()
            .items.map((x) => (x.product.id === id ? { ...x, qty: Math.max(1, qty) } : x))
            .filter((x) => x.qty > 0),
        }),
      clear: () => set({ items: [] }),
      subtotal: () => get().items.reduce((s, x) => s + x.product.price * x.qty, 0),
      count: () => get().items.reduce((s, x) => s + x.qty, 0),
    }),
    { name: "boba-charms-cart" },
  ),
);
