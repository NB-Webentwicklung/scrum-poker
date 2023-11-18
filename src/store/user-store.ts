import { generateRandomId } from "@/utils/randomId";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IGame {
  id: string;
  name: string;
}
type CurrentStep = "landing" | "createGame" | "chooseName" | "game";

export interface IUser {
  id: string;
  currentStep: CurrentStep;
  name?: string;
  game: IGame | null;
}
interface UserProps {
  user: IUser | null;
  createUserId: () => void;
  createGame: (name: string) => void;
  joinGame: (name: string) => void;
  changeStep: (step: CurrentStep) => void;
  exitGame: () => void;
}

export const initialUserState = {
  user: null,
};

export const useUserStore = create<UserProps>()(
  devtools(
    (set, get) => ({
      ...initialUserState,

      createUserId: () => {
        set({
          user: {
            id: generateRandomId(),
            currentStep: "createGame",
            game: null,
          },
        });
      },
      createGame: (name) => {
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              currentStep: "chooseName",
              game: {
                id: generateRandomId(),
                name,
              },
            },
          });
        } else {
          console.error("No user found");
        }
      },
      joinGame: (name: string) => {
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              currentStep: "game",
              name,
            },
          });
        } else {
          console.error("No user found");
        }
      },
      changeStep: (step: CurrentStep) => {
        const user = get().user;
        if (user) {
          set({
            user: {
              ...user,
              currentStep: step,
            },
          });
        } else {
          console.error("No user found");
        }
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
    }),
    { name: "user-store" },
  ),
);
