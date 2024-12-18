import React, { createContext, useState, Dispatch, SetStateAction } from "react"

type AuthContextType = {
  firstLanguage: string
  secondLanguage: string
  textToTranslate: string
  translatedText: string
  setFirstLanguage: Dispatch<SetStateAction<string>>
  setSecondLanguage: Dispatch<SetStateAction<string>>
  setTextToTranslate: Dispatch<SetStateAction<string>>
  setTranslatedText: Dispatch<SetStateAction<string>>
}

const LanguageContext = createContext<AuthContextType>({
  firstLanguage: "",
  secondLanguage: "",
  textToTranslate: "",
  translatedText: "",
  setFirstLanguage: () => {},
  setSecondLanguage: () => {},
  setTextToTranslate: () => {},
  setTranslatedText: () => {},
})

const LanguageStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [firstLanguage, setFirstLanguage] = useState("en")
  const [secondLanguage, setSecondLanguage] = useState("fr")
  const [textToTranslate, setTextToTranslate] = useState("")
  const [translatedText, setTranslatedText] = useState("")

  return (
    <LanguageContext.Provider
      value={{
        firstLanguage,
        secondLanguage,
        textToTranslate,
        translatedText,
        setFirstLanguage,
        setSecondLanguage,
        setTextToTranslate,
        setTranslatedText,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageStateProvider, LanguageContext }
