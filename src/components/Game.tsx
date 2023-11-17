import clsx from "clsx";
import React from "react";

const Game = () => {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className='mt-52'>
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
      <div className=''>
        <div className='flex justify-center mt-8'>
          <div
            className={clsx(
              "border-2 border-slate-600 items-center justify-center flex rounded-lg w-12 h-20",
              !revealed && "bg-blue-300",
            )}
          >
            <p className={clsx("text-2xl", !revealed && "hidden")}>5</p>
          </div>
        </div>
        <p className='text-center font-bold pt-2'>Niklas</p>
      </div>
    </div>
  );
};

export default Game;
