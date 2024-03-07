import { useUserStore } from "@/store/userStore";
import { Copy } from "lucide-react";
import { toast } from "sonner";

import GameDropdown from "./GameDropdown";

const GameNavigation = () => {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  return (
    <div>
      <div className='flex justify-between'>
        <GameDropdown />
        <button
          onClick={handleCopyLink}
          className='flex space-x-2 items-center border-2 px-4 py-1 rounded-md border-gray-400 hover:text-black text-gray-600'
        >
          <Copy size={24} />
          <p>Copy invite link</p>
        </button>
        <p className='font-medium'>{user?.name}</p>
      </div>
    </div>
  );
};

export default GameNavigation;
