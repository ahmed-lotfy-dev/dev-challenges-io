import Image from "next/image"
import Editor from "./Editor"
import Header from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)] relative font ">
      <div className="bg-[url('@/public/Hero-Background-notecode.svg')] bg-cover bg-bottom absolute top-0 left-0 w-full h-full -z-10"></div>
      <Header />
      <Editor />
    </div>
  )
}
