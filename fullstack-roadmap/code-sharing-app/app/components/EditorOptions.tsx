"use client"
import Image from "next/image"
import link from "@/public/link.svg"
import arrowDown from "@/public/down arrow.svg"
import useStore from "../store/appState"
import * as monaco from "monaco-editor"
interface EditorOptionsProps {
  languages: monaco.languages.ILanguageExtensionPoint[]
}

export default function EditorOptions({
  languages,
}: EditorOptionsProps): React.ReactNode {
  const theme = useStore((state) => state.theme)
  const language = useStore((state) => state.language)
  const setTheme = useStore((state) => state.setTheme)
  const setlanguage = useStore((state) => state.setLanguage)
  console.log({ theme, language })

  return (
    <div className="flex justify-between p-5">
      <div className="flex gap-5">
        <div className="flex gap-2 rounded-full p-2 relative">
          <select
            className="cursor-pointer rounded-full p-2 text-sm bg-blue-200 appearance-none"
            name="language"
            id="language"
            onChange={(e) => {
              setlanguage(e.target.value)
              console.log(e.target.value)
            }}
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.aliases ? lang.aliases[0] : lang.id}
              </option>
            ))}
          </select>
          <Image
            src={arrowDown}
            alt="select option arrow down"
            className="absolute top-[50%] right-[25%] translate-x-[50%] -translate-y-[50%] cursor-pointer"
          />
        </div>
        <div className="flex gap-2 rounded-full p-2 relative">
          <select
            className="cursor-pointer rounded-full px-8 text-sm bg-blue-200 appearance-none"
            name="theme"
            id="theme"
            onChange={(e) => {
              setTheme(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option value="light">Light</option>
            <option value="vs-dark">Dark</option>
          </select>
          <Image
            src={arrowDown}
            alt="select option arrow down"
            className="absolute top-[50%] right-[25%] translate-x-[50%] -translate-y-[50%] cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-5">
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Share
          </button>
        </div>
      </div>
    </div>
  )
}
