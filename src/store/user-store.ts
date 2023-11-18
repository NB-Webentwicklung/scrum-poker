import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IGame {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name?: string;
  game: IGame | null;
}
interface UserProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const initialUserState = {
  user: null,
};

export const useUserStore = create<UserProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,

      logout: () => {
        set({ user: null });
      },
      setUser: (user) => {
        set({ user });
      },
    }),
    { name: "user-store" },
  ),
);
