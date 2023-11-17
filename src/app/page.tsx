import {
  faApple,
  faGoogle,
  faMeta,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import StartImage from "public/start.png";
export default function Home() {
  const icons = [faGoogle, faMicrosoft, faApple, faMeta];

  return (
    <main className='mt-40'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='py-8'>
          <h1 className='text-4xl font-bold'>
            Scrum Poker for <br />
            agile teams
          </h1>
          <p className='text-lg text-slate-500 py-2'>
            Simple and fun story point estimations.
          </p>
          <button className='text-lg bg-blue-300 px-8 py-3 rounded-lg mt-4 hover:bg-blue-400'>
            Create new game
          </button>
          <p className='text-slate-500 pt-20 pb-2'>Trusted by teams at</p>
          <div className='flex space-x-8'>
            {icons.map((icon, index) => (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                className='w-6 text-slate-500'
              />
            ))}
          </div>
        </div>
        <div>
          <Image src={StartImage} width={430} height={430} alt='start-image' />
        </div>
      </div>
    </main>
  );
}
