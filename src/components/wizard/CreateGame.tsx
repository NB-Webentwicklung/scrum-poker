import React from "react";
import NavigationHeader from "./NavigationHeader";

interface CreateGameProps {
  startGameAction: () => void;
  goBack: () => void;
}

const CreateGame = ({ startGameAction, goBack }: CreateGameProps) => {
  return (
    <div>
      <div className='w-1/2 mx-auto'>
        <NavigationHeader goBack={goBack} />
        <div>
          <p className='pl-2 pb-1 text-lg'>Game</p>
          <input
            className='px-4 py-3 outline-none border-2 border-slate-700 rounded-lg w-full'
            type='text'
            placeholder="Game's name"
          />
          <button
            onClick={startGameAction}
            className='w-full py-3 bg-blue-300 hover:bg-blue-400 rounded-lg mt-4'
          >
            Create game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
