import { Menu } from "@headlessui/react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs"
import logo from "../public/assets/logo.png"

export const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div className="fixed top-0 h-14  justify-between w-full flex flex-nowrap items-center p-4  bg-[#0c0e10] mb-[2px] z-10 ">
      <div className="flex  items-center justify-start   w-44 ">
        <Link href="/">
          <a className="flex">
            <Image src={logo} alt="logo" width={36} height={36} />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <SubMenu button={<BsThreeDotsVertical />} diretion="left-0">
            <>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={`${active && "bg-slate-500"} flex p-2`}
                  >
                    Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/account"
                    className={`${active && "bg-slate-500"} flex p-2`}
                  >
                    Account
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={`${active && "bg-slate-500"} flex p-2`}
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
            </>
          </SubMenu>
        </div>
      </div>
      <div
        className="absolute left-48 -translate-x-1/2 flex h-14  transition-all group gap-1 items-center overflow-hidden w-6 focus-within:w-full bg-blackTwitch focus-within:p-4 
      focus-within:left-1/2 md:left-1/2 hover:text-purpleTwitch md:w-80 md:focus-within:w-80 md:p-4 md:hover:text-white"
      >
        <input
          type="text"
          aria-label="search"
          className=" w-full md:cursor-text opacity-0 outline-none focus:outline-1 h-7 rounded-l px-2 bg-zinc-500 focus:outline-purpleTwitch transition-[width] text-white  group-focus-within:w-full group-focus-within:opacity-100 cursor-pointer group-focus-within:cursor-text 
          md:opacity-100 md:w-full placeholder:text-zinc-200"
          placeholder="Search"
        />
        <button
          className=" w-6 grid place-content-center -ml-6 pointer-events-none outline-none group-focus-within:text-white group-focus-within:ml-auto z-10 h-7  md:bg-zinc-500 p-2 group-focus-within:pointer-events-auto group-focus-within:hover:text-purpleTwitch 
        group-focus-within:bg-zinc-500 group-focus-within:rounded-r focus:outline-purpleTwitch md:ml-0
        md:rounded-r disabled:cursor-not-allowed md:pointer-events-auto md:disabled:hover:text-white disabled:group-focus-within:hover:text-white hover:text-purpleTwitch "
          disabled
        >
          <BsSearch className="" />
        </button>
      </div>
      <div className=" flex items-center justify-end w-40  ">
        {!session && (
          <div className="flex items-center">
            <Link href={"/account"} className="cursor-pointer">
              <button className="px-4 py-[6px] rounded-lg font-bold bg-purpleTwitch ">
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
        {session && (
          <div>
            <SubMenu
              button={
                session.user?.image ? (
                  <Image
                    width={30}
                    height={30}
                    src={session.user?.image}
                    className="rounded-full"
                  />
                ) : (
                  <BsThreeDotsVertical />
                )
              }
            >
              <>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/account"
                      className={`${active && "bg-slate-500"} flex p-2`}
                    >
                      Account
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`${
                        active && "bg-slate-500"
                      } flex p-2 cursor-pointer`}
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </p>
                  )}
                </Menu.Item>
              </>
            </SubMenu>
          </div>
        )}
      </div>
    </div>
  )
}

interface SubMenuProps {
  children?: ReactElement
  diretion?: string
  button: ReactElement
}

const SubMenu = ({ children, diretion = "right-0", button }: SubMenuProps) => {
  return (
    <Menu as="div" className="relative text-left ">
      <Menu.Button className="flex  ">{button}</Menu.Button>
      <Menu.Items
        className={`${diretion} origin-top z-10  absolute flex flex-col w-48 mt-1 bg-blackTwitch rounded gap-1`}
      >
        {children}
      </Menu.Items>
    </Menu>
  )
}
