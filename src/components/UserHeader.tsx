import React, { useState } from "react";
import Image from "next/image";
import { useUserStore } from "@/store/userStore";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Logo from "public/logo.png";

import IconUI from "./ui/IconUI";

interface UserHeaderProps {
  playerName: string;
  startAction: () => void;
}

const UserHeader = ({ playerName, startAction }: UserHeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const logout = useUserStore((state) => state.logout);

  return (
    <div>
      <div className='flex space-x-4 items-center'>
        <Image src={Logo} width={36} height={36} alt='logo' />
        <div className='flex items-center space-x-2'>
          <p className='text-lg font-medium'>{playerName}</p>
          <button
            className='flex'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {showDropdown ? (
              <IconUI faIcon={faCaretUp} />
            ) : (
              <IconUI faIcon={faCaretDown} />
            )}
          </button>
        </div>
      </div>
      <div>
        <div
          className={clsx(
            "absolute z-10 bg-slate-200 p-2 space-y-2 w-36 shadow-md border-2 border-slate-300 rounded-md mt-2",
            !showDropdown && "hidden",
          )}
        >
          <button
            onClick={startAction}
            className='p-2 text-sm w-full rounded-md bg-slate-300'
          >
            New Game
          </button>
          <button
            onClick={logout}
            className='p-2 text-sm w-full rounded-md bg-red-300'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
