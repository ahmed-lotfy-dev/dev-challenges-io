import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react"
import { ApiResponse } from "./types"

export type filtersType = {
  query: string
  countriesCount: number
  sortBy: string
  isUnMember: boolean
  isIndependant: boolean
  region: string[]
}

export type AppContextType = {
  countriesData: ApiResponse | null
  setCountriesData: React.Dispatch<React.SetStateAction<ApiResponse | null>>
  filters: filtersType
  setFilters: React.Dispatch<React.SetStateAction<filtersType>>
}

const AppContext = createContext<AppContextType>(null!)

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [countriesData, setCountriesData] = useState<ApiResponse | null>(null)
  const [filters, setFilters] = useState<filtersType>({
    query: "",
    countriesCount: 0,
    sortBy: "population",
    isUnMember: false,
    isIndependant: false,
    region: [],
  })

  return (
    <AppContext.Provider
      value={{
        countriesData,
        setCountriesData,
        filters,
        setFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useDataContext = () => {
  if (!AppContext) throw new Error("No context available")
  return useContext(AppContext)
}
