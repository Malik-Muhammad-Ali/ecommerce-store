import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import toast from "react-hot-toast";

import {Product} from "@/types";

interface CartStore {
    items?: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items || [];
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                return toast("Item already added to cart.");
            }

            set({ items: [...currentItems, data] });
            toast.success("Item added to cart.");
        },
        removeItem: (id: string) => {
            const currentItems = get().items || [];
            set({ items: [...currentItems.filter((item) => item.id !== id)] })
            toast.success("Item removed from cart.");
        },
        removeAll: () => {
            set({ items: [] });
            toast.success("Cart cleared.");
        }
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
);

export default useCart;
