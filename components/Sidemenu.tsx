import Image from "next/image"
import { BsArrowBarRight, BsDot } from "react-icons/bs"
import { RiMovieLine } from "react-icons/ri"
import mock_data from "../data/mock_data.json"

const topChannels = mock_data.sort((a, b) => b.rank - a.rank).slice(0, 4)

const Sidemenu = () => {
  return (
    <div className="fixed w-14  scrollbar-thumb-inherit scrollbar-track-inherit  overflow-y-auto scrollbar-thin  hover:scrollbar-thumb-gray-600 scrollba hover:scrollbar-track-blackTwitch sm:w-16 xl:w-[15rem] h-[calc(100%-4rem)]  b-2 bg-blackTwitch check">
      <div className="pt-4 pb-2 flex gap-3 xl:flex-row xl:gap-0 flex-col justify-between">
        <p className="hidden xl:flex uppercase font-bold text-sm pl-2">
          Recommended Channels
        </p>
        <button className="flex mx-auto  foucus:outline cursor-pointer ">
          <BsArrowBarRight size={20} />
        </button>

        <div>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </div>
      </div>
      {mock_data.map((i) => (
        <div
          className="inline-flex items-center w-full  justify-center hover:bg-zinc-900 cursor-pointer xl:pl-2 py-[2px]"
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
              <p className=" -mb-[2px] text-sm font-semibold">{i.username}</p>
              <p className="-mt-[2px] text-gray-400 text-sm">{i.game_name}</p>
            </div>
            <p className="flex items-center text-xs text-gray-300 pr-2">
              <BsDot size={40} color="red" />
              {i.rank}K
            </p>
          </div>
        </div>
      ))}
      <div className="pt-4 pb-2 ">
        <p className="hidden xl:flex uppercase font-bold text-sm pl-2 pb-2">
          Top Channels
        </p>
        <p>
          <RiMovieLine
            size={20}
            className="xl:hidden justify-center w-full mb-2"
          />
        </p>
        {topChannels.map((i) => (
          <div
            className="inline-flex items-center w-full justify-center  hover:bg-zinc-900 cursor-pointer xl:pl-2  py-[2px]"
            key={i.id}
          >
            <div>
              <Image
                src={i.avatar}
                height={30}
                width={30}
                alt={i.username}
                title={i.username}
                className="rounded-full    "
              />
            </div>
            <div className="hidden xl:flex justify-between w-full px-1   ">
              <div className="">
                <p className=" -mb-[2px] text-sm font-semibold">{i.username}</p>
                <p className="-mt-[2px] text-gray-400 text-sm">{i.game_name}</p>
              </div>
              <p className="flex items-center text-xs text-gray-300 pr-2">
                <BsDot size={40} color="red" />
                {i.rank}K
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidemenu
