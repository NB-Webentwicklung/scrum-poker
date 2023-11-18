import clsx from "clsx";
import React from "react";

interface PlayerProps {
  revealed: boolean;
  className?: string;
}

const Player = ({ revealed, className }: PlayerProps) => {
  return (
    <div className={clsx(className)}>
      <div className='flex justify-center'>
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
  );
};

export default Player;
