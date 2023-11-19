import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Logo from "public/logo.png";

import IconUI from "../ui/IconUI";

interface WizardNavigationProps {
  goBack: () => void;
}

const WizardNavigation = ({ goBack }: WizardNavigationProps) => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");

  return (
    <div className='flex items-center justify-between pb-8'>
      <div className='flex items-center space-x-2'>
        <Image src={Logo} width={50} height={50} alt='logo' />
        <p className='text-xl font-medium'>Scrum Poker</p>
      </div>
      {!roomId && <IconUI faIcon={faBackward} action={goBack} />}{" "}
    </div>
  );
};

export default WizardNavigation;
