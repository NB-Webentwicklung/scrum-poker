import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import clsx from "clsx";

import Player from "../Player";
import GameNavigation from "./GameNavigation";

const Game = () => {
  const [revealed, setRevealed] = useState(false);

  const user = useUserStore((state) => state.user);

  if (!user.game?.id)
    return (
      <div>
        <p className='text-center '>Room doesn&apos;t exist.</p>
        <Link
          className='flex justify-center w-fit mx-auto px-6 py-2 bg-blue-300 rounded-lg mt-2 hover:bg-blue-400'
          href='/'
        >
          Create new room
        </Link>
      </div>
    );

  return (
    <div>
      <GameNavigation />
      <div className='py-20'>
        <Player revealed={revealed} className='pb-8' />
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
        <Player revealed={revealed} className='pt-8' />
      </div>
    </div>
  );
};

export default Game;
