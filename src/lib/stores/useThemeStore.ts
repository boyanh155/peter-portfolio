import { create } from "zustand";
import { persist } from "zustand/middleware";

type theme = "light" | "dark";
interface State {
  theme: theme;
}
interface Store extends State {
  setTheme: (theme: theme) => void;
}

const initialState: State = {
  theme: "light",
};
export const useThemeStore = create<Store, [["zustand/persist", unknown]]>(
  persist<Store>(
    (set) => ({
      ...initialState,
      setTheme: (theme: theme) =>
        set((state) => {
          return { theme: theme };
        }),
    }),
    {
      name: "theme-storage", // unique name
    }
  )
);
