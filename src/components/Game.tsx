import clsx from "clsx";
import React, { useState } from "react";
import Player from "./Player";
import Image from "next/image";
import Logo from "public/logo.png";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import IconUI from "./ui/IconUI";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

interface GameProps {
  gameId: string;
  exitGame: () => void;
}

const Game = ({ gameId, exitGame }: GameProps) => {
  const [revealed, setRevealed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const user = useUserStore((state) => state.user);

  return (
    <div>
      <div className='flex justify-between'>
        <div className='relative'>
          <div className='flex space-x-4 items-center'>
            <Image src={Logo} width={36} height={36} alt='logo' />
            <div className='flex items-center space-x-2'>
              <p className='text-lg font-medium'>{user?.game?.name}</p>
              <button
                className='flex'
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {showDropdown ? (
                  <IconUI faIcon={faCaretUp} />
                ) : (
                  <IconUI faIcon={faCaretDown} />
                )}
              </button>
            </div>
          </div>
          <div
            className={clsx(
              "absolute z-10 bg-slate-200 p-2 w-full space-y-2 shadow-md border-2 border-slate-300 rounded-md mt-2 right-0",
              !showDropdown && "hidden",
            )}
          >
            <button className='p-2 text-sm w-full rounded-md bg-slate-300'>
              New Game
            </button>
            <button
              onClick={exitGame}
              className='p-2 text-sm w-full rounded-md bg-red-300'
            >
              Exit Game
            </button>
          </div>
        </div>

        <p className='font-medium'>{user?.name}</p>
      </div>
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
