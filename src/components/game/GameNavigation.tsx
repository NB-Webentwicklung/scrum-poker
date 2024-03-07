import { useUserStore } from "@/store/userStore";

import GameDropdown from "./GameDropdown";

const GameNavigation = () => {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return (
    <div>
      <div className='flex justify-between'>
        <GameDropdown />
        <p className='font-medium'>{user?.name}</p>
      </div>
    </div>
  );
};

export default GameNavigation;
