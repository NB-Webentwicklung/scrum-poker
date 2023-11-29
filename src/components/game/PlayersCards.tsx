import React, { useState } from "react";
import { useUserStore } from "@/store/userStore";
import { IPlayer } from "@/store/userStore.types";

import Player from "../Player";

interface PlayersCardsProps {
  children: React.ReactNode;
  players: IPlayer[] | null;
}

const PlayersCards = ({ children, players }: PlayersCardsProps) => {
  const [revealed, setRevealed] = useState(false);
  const user = useUserStore((state) => state.user);

  const testPlayers = players?.slice(0, 3);
  const testPlayersWithoutUser = testPlayers?.filter(
    (player) => player.id != user.id,
  );
  const testTotalPlayers = testPlayers?.length ?? 0;

  //   const playersWithoutUser = players?.filter((player) => player.id != user.id);
  //   const totalPlayers = players?.length ?? 0;

  return (
    <div className='pt-16'>
      <p className='text-center px-4 py-2 bg-orange-200 rounded-lg w-fit mx-auto'>
        Warning: The game logic is currently in developement.
      </p>
      <div className='h-40 flex space-x-6 justify-center'>
        {(() => {
          switch (testTotalPlayers) {
            case 2:
              return (
                <Player
                  key={"x"}
                  name={"1"}
                  revealed={revealed}
                  className='pt-8'
                />
              );
            case 3:
              return (
                <div className='flex space-x-12'>
                  <Player
                    key={"x"}
                    name={"1"}
                    revealed={revealed}
                    className='pt-8'
                  />
                  <Player
                    key={"y"}
                    name={"2"}
                    revealed={revealed}
                    className='pt-8'
                  />
                </div>
              );
            // TODO: Add more cases
            default:
              return;
          }
        })()}
        {/* {testPlayersWithoutUser?.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              revealed={revealed}
              className='pt-8'
            />
          );
        })} */}
      </div>
      <div className='flex justify-center'>
        <div className='py-6 w-full'>{children}</div>
      </div>
      <div className='h-40'>
        {/* User of Website */}
        <Player name={user.name} revealed={revealed} className='pt-8' />
      </div>
    </div>
  );
};

export default PlayersCards;
