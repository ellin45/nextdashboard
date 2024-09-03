import {create} from "zustand";
import {persist} from "zustand/middleware";

type MenuStore = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const useMenuStore = create<MenuStore>()(
  persist(
    (set) => ({
      isOpen: false,
      toggleMenu: () => set((state) => ({isOpen: !state.isOpen})),
    }),
    {name: "menu-store"}
  )
);
