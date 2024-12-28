import { NavLink } from "react-router"
import useFetch from "../hooks/useFetch"
import { ApiResponse } from "../types"

type Props = { borders: string[] }

export default function Border({ borders }: Props) {
  const { data } =
    useFetch<ApiResponse>(`https://restcountries.com/v3.1/alpha?codes=${borders}&fields=flags,name
`)

  if (!data) return <h3>No Border Countires</h3>

  console.log(data)
  return (
    <div className="text-start px-4">
      <h3>Neighbouring Countries</h3>
      <div className="flex flex-wrap gap-5">
        {data.map((country) => (
          <div className="w-[100px]">
            <NavLink to={`/${country.name.common}`}>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="w-[80px] h-[80px] rounded-lg"
              />
              <h3>{country.name.common}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}
