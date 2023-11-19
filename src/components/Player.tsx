import React from "react";
import clsx from "clsx";

interface PlayerProps {
  name: string | null;
  revealed: boolean;
  className?: string;
}

const Player = ({ name, revealed, className }: PlayerProps) => {
  return (
    <div className={clsx("h-40", className)}>
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
      <p className='text-center font-medium pt-2'>{name ?? "-"}</p>
    </div>
  );
};

export default Player;
