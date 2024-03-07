import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import clsx from "clsx";

import GameNavigation from "./GameNavigation";
import PlayersCards from "./PlayersCards";
import RoomNotFound from "./RoomNotFound";

const Game = () => {
  const [revealed, setRevealed] = useState(false);

  const user = useUserStore((state) => state.user);

  const joinRoom = useUserStore((state) => state.joinRoom);

  useEffect(() => {
    // TODO: also runs on the no room found (No room id provided)
    const intervalId = setInterval(() => {
      joinRoom(user.game?.id ?? "");
    }, 1000);

    return () => clearInterval(intervalId);
  }, [joinRoom, user.game?.id]);

  if (!user.game?.id) return <RoomNotFound />;

  return (
    <div>
      <GameNavigation />
      <PlayersCards players={user.game.players}>
        <div className='flex justify-center'>
          <div className='border-2 border-slate-600 w-2/3 rounded-lg p-8 h-40 flex justify-center items-center'>
            <button
              onClick={() => setRevealed(!revealed)}
              className={clsx(
                "bg-blue-300  rounded-lg w-40 py-3 hover:bg-blue-400",
              )}
            >
              {revealed ? "Start new voting" : "Reveal Cards"}
            </button>
          </div>
        </div>
      </PlayersCards>
    </div>
  );
};

export default Game;
