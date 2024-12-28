import { useEffect } from "react"
import { useDataContext } from "./AppContext"
import useFetch from "./hooks/useFetch"
import { ApiResponse } from "./types"
import { Outlet } from "react-router"

function App() {
  const { setCountriesData, setFilters } = useDataContext()

  const { data: countriesData } = useFetch<ApiResponse>(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,area,region,capital,unMember,independent"
  )

  useEffect(() => {
    if (countriesData) {
      setCountriesData(countriesData)
      setFilters((prev) => ({ ...prev, countriesCount: countriesData.length }))
    }
  }, [countriesData])

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-[300px] bg-[url(/hero-image-wr.jpg)] bg-cover bg-center bg-no-repeat -z-50 border-[0.5px] border-b-componentClr"></div>
      <img
        src="/public/Logo.svg"
        alt=""
        className="absolute top-[13%] left-[50%] -translate-x-[50%] -translate-y-[13%]"
      />
      <Outlet />
    </div>
  )
}

export default App
