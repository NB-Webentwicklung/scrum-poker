"use client";

import ChooseName from "@/components/wizard/ChooseName";
import CreateGame from "@/components/wizard/CreateGame";
import Game from "@/components/Game";
import Landing from "@/components/wizard/Landing";
import { useState } from "react";

export default function Home() {
  type StepType = "landing" | "createGame" | "chooseName" | "startGame";

  const [step, setStep] = useState<StepType>("landing");

  return (
    <main className='mt-40'>
      {step === "landing" && (
        <Landing createGameAction={() => setStep("createGame")} />
      )}
      {step === "createGame" && (
        <CreateGame
          startGameAction={() => setStep("chooseName")}
          goBack={() => setStep("landing")}
        />
      )}
      {step === "chooseName" && (
        <ChooseName
          joinGameAction={() => {
            setStep("startGame");
          }}
          goBack={() => {
            setStep("createGame");
          }}
        />
      )}
      {step === "startGame" && <Game />}
    </main>
  );
}
