import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import clsx from "clsx";

import Player from "../Player";
import GameNavigation from "./GameNavigation";
import RoomNotFound from "./RoomNotFound";

const Game = () => {
  const [revealed, setRevealed] = useState(false);

  const user = useUserStore((state) => state.user);

  const joinRoom = useUserStore((state) => state.joinRoom);

  useEffect(() => {
    const intervalId = setInterval(() => {
      joinRoom(user.game?.id ?? "");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [joinRoom, user.game?.id]);

  if (!user.game?.id) return <RoomNotFound />;

  return (
    <div>
      <GameNavigation />
      <div className='py-20'>
        <div className='h-40 flex space-x-6 justify-center'>
          {user.game?.players?.map((player) => (
            <Player
              key={player.id}
              name={player.name}
              revealed={revealed}
              className='pt-8'
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <div className='border-2 border-slate-600 w-1/2 rounded-lg p-8 h-40 flex justify-center items-center'>
            <button
              onClick={() => setRevealed(!revealed)}
              className={clsx(
                "bg-blue-300  rounded-lg w-40 py-3 hover:bg-blue-400",
              )}
            >
              {revealed ? "Start new voting" : "Reveal Cards"}
            </button>
          </div>
        </div>
        <div className='h-36'>
          <Player name={user.name} revealed={revealed} className='pt-8' />
        </div>
      </div>
    </div>
  );
};

export default Game;
