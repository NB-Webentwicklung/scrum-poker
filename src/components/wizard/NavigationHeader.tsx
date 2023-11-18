import React from "react";
import Image from "next/image";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Logo from "public/logo.png";

import IconUI from "../ui/IconUI";

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
      <IconUI faIcon={faBackward} action={goBack} />
    </div>
  );
};

export default NavigationHeader;
