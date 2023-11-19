"use client";

import { useSearchParams } from "next/navigation";

import Game from "@/components/game/Game";
import Wizard from "@/components/wizard/Wizard";

export default function Home() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");

  return <main className='mt-14'>{roomId ? <Game /> : <Wizard />}</main>;
}
