import React from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";

import ChooseName from "./steps/ChooseName";
import CreateGame from "./steps/CreateGame";
import Landing from "./steps/Landing";

const Wizard = () => {
  const user = useUserStore((state) => state.user);

  const createGame = useUserStore((state) => state.createGame);
  const createGameDirect = useUserStore((state) => state.createGameDirect);
  const createUser = useUserStore((state) => state.createUser);
  const changeStep = useUserStore((state) => state.changeStep);

  switch (user?.currentStep) {
    case "createGame":
      return (
        <CreateGame
          createGameAction={createGame}
          createGameDirectAction={createGameDirect}
          goBack={() => changeStep("landing")}
        />
      );
    case "chooseName":
      return (
        <ChooseName
          createUserAction={createUser}
          goBack={() => {
            changeStep("createGame");
          }}
        />
      );
    default:
      return (
        <Landing
          startAction={() => {
            changeStep("createGame");
          }}
        />
      );
  }
};

export default Wizard;
