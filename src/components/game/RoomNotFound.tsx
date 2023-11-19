import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import RoomImage from "public/roomNotFound.png";

const RoomNotFound = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");

  return (
    <div className='flex justify-center space-x-12 items-center mt-40'>
      <Image
        src={RoomImage}
        width={300}
        height={300}
        alt='room-not-found-image'
      />
      <div>
        <p className='text-center text-lg font-medium'>
          Room {roomId} not found
        </p>
        <Link
          className='flex justify-center w-fit mx-auto px-6 py-2 bg-blue-300 rounded-lg mt-4 hover:bg-blue-400'
          href='/'
        >
          Create new room
        </Link>
      </div>
    </div>
  );
};

export default RoomNotFound;
