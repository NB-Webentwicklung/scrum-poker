"use client";

import { useLoginAndJoinRoom } from "@/hooks/useLoginAndJoinRoom";
import { useUserStore } from "@/store/userStore";

import Game from "@/components/game/Game";
import Wizard from "@/components/wizard/Wizard";

export default function Home() {
  const roomId = useLoginAndJoinRoom();
  const user = useUserStore((state) => state.user);

  return (
    <main className='mt-14'>{roomId && user.id ? <Game /> : <Wizard />}</main>
  );
}
