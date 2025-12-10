"use client"
import Image from "next/image"
import Logo from "../../public/NoteCodeLogo.svg"

export default function Header() {
  return (
    <div className="text-center pt-10 text-black flex flex-col gap-3">
      <Image
        src={Logo}
        alt="logo"

        priority
        className="m-auto mt-5 w-[200px] h-auto"
      />
      <h2 className="text-4xl font-semibold mt-8">Create & Share</h2>
      <h1 className="text-5xl font-semibold mt-4">Your Code easily</h1>
    </div>
  )
}
