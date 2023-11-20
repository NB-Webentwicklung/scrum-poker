export type CurrentStep = "landing" | "createGame" | "chooseName" | "game";

export interface IPlayer {
  id: string;
  name: string;
}

export interface IGame {
  id: string;
  name: string;
  players: IPlayer[] | null;
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
  createGame: (name: string) => Promise<void>;
  createGameDirect: (name: string) => Promise<string>;
  createUser: (name: string) => void;
  exitGame: () => void;
  loginWithLocalStorage: (id: string, name: string) => void;
  logout: () => void;
  joinRoom: (roomId: string | null) => void;
}
