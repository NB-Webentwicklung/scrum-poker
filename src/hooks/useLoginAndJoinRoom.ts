import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/store/userStore";

export const useLoginAndJoinRoom = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const loginWithLocalStorage = useUserStore(
    (state) => state.loginWithLocalStorage,
  );
  const joinRoom = useUserStore((state) => state.joinRoom);

  useEffect(() => {
    const id = localStorage.getItem("playerId");
    const name = localStorage.getItem("playerName");
    if (id && name) {
      loginWithLocalStorage(id, name);
    }

    if (roomId) {
      joinRoom(roomId);
    }
  }, [loginWithLocalStorage, joinRoom, roomId]);

  return roomId;
};
