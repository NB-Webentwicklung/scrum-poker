"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";

import Game from "@/components/game/Game";
import Wizard from "@/components/wizard/Wizard";

export default function Home() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const user = useUserStore((state) => state.user);
  const loginWithLocalStorage = useUserStore(
    (state) => state.loginWithLocalStorage,
  );
  const joinRoom = useUserStore((state) => state.joinRoom);

  useEffect(() => {
    const id = localStorage.getItem("playerId");
    const name = localStorage.getItem("playerName");
    if (id && name) {
      loginWithLocalStorage(id, name);
    }

    if (roomId) {
      joinRoom(roomId);
    }
  }, [loginWithLocalStorage, joinRoom, roomId]);

  return (
    <main className='mt-14'>{roomId && user.id ? <Game /> : <Wizard />}</main>
  );
}
