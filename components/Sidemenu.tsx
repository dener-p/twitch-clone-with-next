import Image from "next/image"
import { BsDot } from "react-icons/bs"
import { RiMovieLine } from "react-icons/ri"
import mock_data from "../data/mock_data.json"

const topChannels = mock_data.sort((a, b) => a.rank - b.rank).slice(0, 4)

const Sidemenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen b-2 bg-blackTwitch">
      <div className="pt-4 pb-2 ">
        <p className="hidden xl:flex uppercase font-bold text-sm">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {mock_data.map((i) => (
        <div
          className="inline-flex items-center w-full  hover:bg-zinc-900 cursor-pointer"
          key={i.id}
        >
          <div>
            <Image
              src={i.avatar}
              height={30}
              width={30}
              alt={i.username}
              title={i.username}
              className="rounded-full "
            />
          </div>
          <div className="hidden xl:flex justify-between w-full px-1   ">
            <div className="">
              <p className=" -mb-1 text-sm font-semibold">{i.username}</p>
              <p className="-mt-1 text-gray-400 text-sm">{i.game_name}</p>
            </div>
            <p className="flex items-center text-xs text-gray-300 pr-2">
              <BsDot size={40} color="red" />
              {i.rank}K
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidemenu
