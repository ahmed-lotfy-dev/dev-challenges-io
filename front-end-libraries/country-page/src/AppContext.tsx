import { createContext, ReactNode, useState } from "react"
import { ApiResponse } from "./types"

export type AppContextType = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  countriesData: ApiResponse | null
  setCountriesData: React.Dispatch<React.SetStateAction<ApiResponse | null>>
}

const AppContext = createContext<AppContextType>(null!)

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("github")
  const [countriesData, setCountriesData] = useState<ApiResponse | null>(null)


  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        countriesData,
        setCountriesData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext }
