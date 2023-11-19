import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Logo from "public/logo.png";

import IconUI from "../ui/IconUI";

const GameNavigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const user = useUserStore((state) => state.user);
  const exitGame = useUserStore((state) => state.exitGame);
  const router = useRouter();

  if (!user) return null;

  return (
    <div>
      <div className='flex justify-between'>
        <div className='relative'>
          <div className='flex space-x-4 items-center'>
            <Image src={Logo} width={36} height={36} alt='logo' />
            <div className='flex items-center space-x-2'>
              <p className='text-lg font-medium'>{user?.game?.name}</p>
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
          <div
            className={clsx(
              "absolute z-10 bg-slate-200 p-2 w-full space-y-2 shadow-md border-2 border-slate-300 rounded-md mt-2 right-0",
              !showDropdown && "hidden",
            )}
          >
            <button className='p-2 text-sm w-full rounded-md bg-slate-300'>
              New Game
            </button>
            <button
              onClick={() => {
                exitGame();
                router.push("/");
              }}
              className='p-2 text-sm w-full rounded-md bg-red-300'
            >
              Exit Game
            </button>
          </div>
        </div>

        <p className='font-medium'>{user?.name}</p>
      </div>
    </div>
  );
};

export default GameNavigation;
