"use client"
import { useMonaco } from "@monaco-editor/react"
import { useEffect, useState } from "react"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import Image from "next/image"
import EditorOptions from "./components/EditorOptions"
import useStore from "./store/appState"

const defaultHTML = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`

const defaultJs = `console.log("Hello World!");`
const defaultPython = `print("Hello World!");`

export default function Editor() {
  const theme = useStore((state) => state.theme)
  const language = useStore((state) => state.language)

  const [languages, setLanguages] = useState<
    monaco.languages.ILanguageExtensionPoint[]
  >([])

  useEffect(() => {
    loader.init().then((monaco) => {
      setLanguages(monaco.languages.getLanguages())
    })
  }, [])

  console.log(languages)
  return (
    <div className="rounded-xl mt-14 pt-5 m-5 border-2 border-solid border-gray-200 md:max-w-[50%] md:m-auto md:mt-14">
      <MonacoEditor
        theme={theme}
        height="50vh"
        id={language}
        defaultLanguage={language}
        defaultValue={defaultHTML}
      />
      <EditorOptions languages={languages} />
    </div>
  )
}
