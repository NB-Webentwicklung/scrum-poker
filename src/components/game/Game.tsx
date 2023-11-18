import clsx from "clsx";
import React, { useState } from "react";
import Player from "../Player";
import GameNavigation from "./GameNavigation";

interface GameProps {
  gameId: string;
}

const Game = ({ gameId }: GameProps) => {
  const [revealed, setRevealed] = useState(false);

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
