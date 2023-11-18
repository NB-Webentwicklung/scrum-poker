import React from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

import ChooseName from "./steps/ChooseName";
import CreateGame from "./steps/CreateGame";
import Landing from "./steps/Landing";

const Wizard = () => {
  const user = useUserStore((state) => state.user);
  const createUserId = useUserStore((state) => state.createUserId);
  const createGame = useUserStore((state) => state.createGame);
  const joinGame = useUserStore((state) => state.joinGame);
  const changeStep = useUserStore((state) => state.changeStep);

  switch (user?.currentStep) {
    case "createGame":
      return (
        <CreateGame
          createGameAction={createGame}
          goBack={() => changeStep("landing")}
        />
      );
    case "chooseName":
      return (
        <ChooseName
          joinGameAction={joinGame}
          goBack={() => {
            changeStep("createGame");
          }}
        />
      );
    default:
      return <Landing createUserIdAction={createUserId} />;
  }
};

export default Wizard;
