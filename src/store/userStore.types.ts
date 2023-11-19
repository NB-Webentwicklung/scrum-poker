export type CurrentStep = "landing" | "createGame" | "chooseName" | "game";

export interface IGame {
  id: string;
  name: string;
}

export interface IUser {
  id: string | null;
  currentStep: CurrentStep;
  name: string | null;
  game: IGame | null;
}

export interface InitialUserStateProps {
  user: IUser;
}

export interface UserProps {
  user: IUser;
  changeStep: (step: CurrentStep) => void;
  createGame: (name: string) => void;
  createUser: (name: string) => void;
  exitGame: () => void;
  loginWithLocalStorage: (id: string, name: string) => void;
  logout: () => void;
  joinRoom: (roomId: string | null) => void;
}
