import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import React, { ButtonHTMLAttributes } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"

const account = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="w-screen grid place-content-center mt-[30vh] gap-4 ">
        <h1 className="text-2xl font-bold">Welcome {session.user?.name}</h1>
        <span>Signed in as {session.user?.email}</span>
        <div className="w-24 h-24 overflow-hidden mx-auto">
          {session.user?.image && (
            <Image
              src={session.user?.image}
              alt="profile"
              className="rounded-full"
              height={100}
              width={100}
              title={session.user?.name ?? ""}
            />
          )}
        </div>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </div>
    )
  }
  return (
    <div className="w-screen grid place-content-center mt-[30vh] ">
      <div className=" flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold">Login</h1>
        <span className="text-lg">
          Chose the account you want to sign in with.
        </span>
        <Button onClick={() => signIn("github")}>
          <FaGithub />
          Sign In <span className="font-bold">with Github</span>
        </Button>
        <Button onClick={() => signIn()} color="bg-blue-500">
          <FaGoogle />
          <p>
            Sign In <span className="font-bold">with Google</span>
          </p>
        </Button>
      </div>
    </div>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  color?: string
}

export const Button = ({
  children,
  color = "bg-slate-400",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`w-full ${color} p-2 flex items-center justify-center gap-2`}
      {...props}
    >
      {children}
    </button>
  )
}

export default account
function SignOut(): void {
  throw new Error("Function not implemented.")
}
