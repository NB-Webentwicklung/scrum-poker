import React from "react";
import Image from "next/image";
import { useUserStore } from "@/store/userStore";
import {
  faApple,
  faGoogle,
  faMeta,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import StartImage from "public/start.png";

import UserHeader from "@/components/UserHeader";

import IconUI from "../../ui/IconUI";

interface LandingProps {
  startAction: () => void;
}

const Landing = ({ startAction }: LandingProps) => {
  const user = useUserStore((state) => state.user);

  const icons = [faGoogle, faMicrosoft, faApple, faMeta];
  return (
    <div className='md:mt-40'>
      {user.name && (
        <UserHeader playerName={user.name} startAction={startAction} />
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='py-10'>
          <h1 className='text-4xl font-bold'>
            Scrum Poker for <br />
            agile teams
          </h1>
          <p className='text-lg text-slate-500 py-2'>
            Simple and fun story point estimations.
          </p>
          <button
            onClick={startAction}
            className='text-lg bg-blue-300 px-10 py-3 rounded-lg mt-4 hover:bg-blue-400'
          >
            Create a new game
          </button>
          <p className='text-slate-500 pt-20 pb-2'>Trusted by teams at</p>
          <div className='flex space-x-8'>
            {icons.map((icon, index) => (
              <IconUI key={index} faIcon={icon} />
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
          <Image src={StartImage} width={430} height={430} alt='start-image' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
