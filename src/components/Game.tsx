import clsx from "clsx";
import React from "react";
import Player from "./Player";
import Image from "next/image";
import Logo from "public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconUI from "./ui/IconUI";

interface GameProps {
  gameId: string;
}

const Game = ({ gameId }: GameProps) => {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex space-x-2 items-center'>
          <Image src={Logo} width={36} height={36} alt='logo' />
          <p className='text-lg font-medium'>{gameId}</p>
          <IconUI faIcon={faCaretDown} />
        </div>
        <p className='font-medium'>Niklas</p>
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
