import React, { useState } from "react";
import Image from "next/image";
import { useUserStore } from "@/store/userStore";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Logo from "public/logo.png";

import IconUI from "../ui/IconUI";

interface UserDropdownProps {
  showDropdown: boolean;
  changeDropdown: () => void;
}

const UserDropdown = ({ showDropdown, changeDropdown }: UserDropdownProps) => {
  const userName = useUserStore((state) => state.user?.name);

  return (
    <div className='flex space-x-4 items-center'>
      <Image src={Logo} width={36} height={36} alt='logo' />
      <div className='flex items-center space-x-2'>
        <p className='text-lg font-medium'>{userName}</p>
        <button className='flex' onClick={() => changeDropdown()}>
          {showDropdown ? (
            <IconUI faIcon={faCaretUp} />
          ) : (
            <IconUI faIcon={faCaretDown} />
          )}
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
