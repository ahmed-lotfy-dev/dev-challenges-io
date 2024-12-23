import { useContext } from "react"
import { AppContext } from "./AppContext"
import useFetch from "./hooks/useFetch"
import { ApiResponse } from "./types"

function App() {
  const {} = useContext(AppContext)

  const { data: countryData } = useFetch<ApiResponse>(
    "https://restcountries.com/v3.1/all"
  )
  console.log(countryData)

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-[300px] bg-[url(/hero-image-wr.jpg)] bg-cover bg-no-repeat -z-50"></div>
      <div className="w-full  text-textColor1 max-w-6xl m-auto"></div>
    </div>
  )
}

export default App
