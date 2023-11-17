import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

interface NavigationHeaderProps {
  goBack: () => void;
}

const NavigationHeader = ({ goBack }: NavigationHeaderProps) => {
  return (
    <div className='flex items-center justify-between pb-8'>
      <div className='flex items-center space-x-2'>
        <Image src={Logo} width={50} height={50} alt='logo' />
        <p className='text-xl font-medium'>Scrum Poker</p>
      </div>
      <FontAwesomeIcon
        type='button'
        onClick={goBack}
        icon={faBackward}
        className='w-6 h-6 text-slate-400 hover:text-slate-500 hover:cursor-pointer'
      />
    </div>
  );
};

export default NavigationHeader;
