import { createGameRoom, createUser } from "@/services/api.service";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { CurrentStep, InitialUserStateProps, UserProps } from "./userProps";

export const initialUserState: InitialUserStateProps = {
  user: {
    id: null,
    currentStep: "landing",
    game: null,
    name: null,
  },
};

export const useUserStore = create<UserProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,
      changeStep: (step: CurrentStep) => {
        set({
          user: {
            ...get().user,
            currentStep: step,
          },
        });
      },
      createGame: async (name) => {
        const data = await createGameRoom(name);
        set({
          user: {
            ...get().user,
            currentStep: "chooseName",
            game: { ...data },
          },
        });
      },
      createUser: async (name: string) => {
        const user = get().user;
        const data = await createUser(name, user.game?.id ?? "");
        localStorage.setItem("playerId", data.id);
        localStorage.setItem("playerName", data.name);
        set({
          user: {
            ...user,
            currentStep: "game",
            id: data.id,
            name: data.name,
          },
        });
      },
      exitGame: () => {
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              currentStep: "landing",
              game: null,
            },
          });
        } else {
          console.error("No user found");
        }
      },
      loginWithLocalStorage: (id: string, name: string) => {
        set({
          user: {
            ...get().user,
            id,
            name,
          },
        });
      },
      logout: () => {
        localStorage.removeItem("playerId");
        localStorage.removeItem("playerName");
        set({
          user: initialUserState.user,
        });
      },
    }),
    { name: "user-store" },
  ),
);
