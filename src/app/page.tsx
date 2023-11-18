"use client";

import Game from "@/components/game/Game";
import { useSearchParams } from "next/navigation";
import Wizard from "@/components/wizard/Wizard";

export default function Home() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");

  return (
    <main className='mt-14'>
      {gameId ? <Game gameId={gameId} /> : <Wizard />}
    </main>
  );
}
