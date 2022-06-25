import { Menu } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs"
import logo from "../public/assets/logo.png"

export const Navbar = () => {
  return (
    <div className="fixed h-14 justify-between w-full flex flex-nowrap items-center p-4 bg-[#0c0e10] mb-[2px] z-10 ">
      <div className="flex  items-center justify-start ">
        <Link href="/">
          <a className="flex">
            <Image src={logo} alt="logo" width={36} height={36} />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <Menu.Button className="flex">
              <BsThreeDotsVertical />
            </Menu.Button>
            <Menu.Items className="origin-top z-10  absolute flex flex-col w-48 mt-1 bg-blackTwitch rounded gap-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-2 rounded ${active && "bg-slate-500 "}`}
                    href="/account-settings"
                  >
                    Account
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-2 rounded  ${active && "bg-slate-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-2 rounded ${active && "bg-slate-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div
        className="flex items-center justify-items-center bg-blackTwitch transition-all w-[2.5rem] group left-[12rem]   focus-within:w-[calc(50vw+2.5rem)] h-10  absolute  overflow-hidden 
      md:w-[400px] md:focus-within:w-[400px] md:static md:mx-auto
      "
      >
        <input
          type="text"
          className="absolute peer transition-opacity opacity-0 p-2 rounded-l bg-zinc-600
          focus:outline outline-purpleTwitch outline-1 outline-offset-1 my-auto  h-4/5 focus:opacity-100 cursor-pointer left-0 w-[calc(50vw-2px)] ml-1 placeholder:text-white/80 md:opacity-100 
          md:w-full md:static "
          placeholder="Search"
        />
        <BsSearch
          size={32}
          className="cursor-pointer  rounded-r  p-2  ml-auto md:bg-zinc-600   md:ml-1  
        group-hover:text-purpleTwitch peer-focus:text-white hover:peer-focus:text-purpleTwitch 
          md:group-hover:text-white
        "
        />
      </div>
      <div className=" flex items-center justify-end w-40  ">
        <div className="flex items-center">
          <Link href={"/"}>
            <button className="px-4 py-[6px] rounded-lg font-bold bg-purpleTwitch ">
              Account
            </button>
          </Link>
          <BsPerson size={30} />
        </div>
      </div>
    </div>
  )
}
