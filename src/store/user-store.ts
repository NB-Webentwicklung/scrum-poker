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
            id: "default",
            currentStep: "createGame",
            game: null,
          },
        });
      },
      createGame: async (name) => {
        const user = get().user;
        if (user) {
          const res = await fetch("http://localhost:3000/api/room", {
            method: "POST",
            body: JSON.stringify({ name }),
          });
          const data = await res.json();
          set({
            user: {
              ...user,
              currentStep: "chooseName",
              game: { id: data.id, name: data.name },
            },
          });
        } else {
          console.error("No user found");
        }
      },
      joinGame: async (name: string) => {
        const user = get().user;
        if (user) {
          const res = await fetch("http://localhost:3000/api/player", {
            method: "POST",
            body: JSON.stringify({ name, roomId: user.game?.id }),
          });
          const data = await res.json();

          set({
            user: {
              ...user,
              currentStep: "game",
              id: data.id,
              name: data.name,
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
