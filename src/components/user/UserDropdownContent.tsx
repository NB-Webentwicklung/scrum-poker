import React from "react";
import { useUserStore } from "@/store/userStore";
import clsx from "clsx";

interface UserDropdownContentProps {
  startAction: () => void;
  showDropdown: boolean;
}

const UserDropdownContent = ({
  startAction,
  showDropdown,
}: UserDropdownContentProps) => {
  const logout = useUserStore((state) => state.logout);

  return (
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
  );
};

export default UserDropdownContent;
