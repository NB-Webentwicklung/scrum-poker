"use client";

import ChooseName from "@/components/wizard/ChooseName";
import CreateGame from "@/components/wizard/CreateGame";
import Game from "@/components/Game";
import Landing from "@/components/wizard/Landing";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  type StepType = "landing" | "createGame" | "chooseName" | "startGame";

  const [step, setStep] = useState<StepType>("landing");

  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");
  const router = useRouter();

  return (
    <main className='mt-14'>
      {step === "landing" && !gameId && (
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
            const randomId = Math.random().toString(36).substring(7);
            router.push(`/?id=${randomId}`);
          }}
          goBack={() => {
            setStep("createGame");
          }}
        />
      )}
      {gameId && (
        <Game
          gameId={gameId}
          exitGame={() => {
            router.push("/");
            setStep("landing");
          }}
        />
      )}
    </main>
  );
}
