import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import NavigationHeader from "./NavigationHeader";

interface ChooseNameProps {
  joinGameAction: () => void;
  goBack: () => void;
}

const ChooseName = ({ joinGameAction, goBack }: ChooseNameProps) => {
  return (
    <div>
      <div className='w-1/2 mx-auto'>
        <NavigationHeader goBack={goBack} />
        <div>
          <p className='pl-2 pb-1 text-lg'>Display Name</p>
          <input
            className='px-4 py-3 outline-none border-2 border-slate-700 rounded-lg w-full'
            type='text'
            placeholder='Name'
          />
          <button
            onClick={joinGameAction}
            className='w-full py-3 bg-blue-300 hover:bg-blue-400 rounded-lg mt-4'
          >
            Join game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseName;
