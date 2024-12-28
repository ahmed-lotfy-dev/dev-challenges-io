import { useParams } from "react-router"
import useFetch from "..//hooks/useFetch"
import { ApiResponse } from "../types"
import CountryInfo from "../components/CountryInfo"
import Borders from "../components/Borders"

type Props = {}

export default function Country({}: Props) {
  const { countryName } = useParams()

  const { data: country } = useFetch<ApiResponse>(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true
`
  )
  if (!country) return <div className="animate-spin"></div>

  const [countryData] = country
  const currency = Object.values(countryData.currencies)[0].name
  const languages = Object.values(countryData.languages).join(",")
  const updatedBorders =
    countryData.borders?.map((border) => (border === "ISR" ? "PAL" : border)) ||
    []

  return (
    <div className="bg-pageBgColor rounded-md text-textColor w-full md:w-[50%] m-auto">
      <img
        src={countryData.flags.svg}
        alt={`${countryData.name.common} flag`}
        className="max-w-[250px] m-auto rounded-xl -translate-y-[50px]"
      />
      <div>
        <h1 className="text-titleBigText font-semibold">
          {countryData.name.common}
        </h1>
        <p>{countryData.name.official}</p>
      </div>

      <div className="w-full flex justify-between px-16 my-10">
        <div className="rounded-lg px-6 py-3 flex gap-5 justify-center items-center bg-componentClr">
          <h2 className="border-r-[0.5px] border-r-pageBgColor pr-3">
            Population
          </h2>
          <p>{new Intl.NumberFormat().format(countryData.population)}</p>
        </div>

        <div className="rounded-lg px-6 py-3 flex gap-5 justify-center items-center bg-componentClr">
          <h2 className="border-r-[0.5px] border-r-pageBgColor pr-3">
            Area (km<sup>2</sup>)
          </h2>
          <p>{new Intl.NumberFormat().format(countryData.area)}</p>
        </div>
      </div>
      <CountryInfo title="Capital" value={countryData.capital[0]} />
      <CountryInfo title="Subregion" value={countryData.subregion} />
      <CountryInfo title="Languages" value={languages} />
      <CountryInfo title="Currencies" value={currency} />
      <CountryInfo title="Continents" value={countryData.continents[0]} />
      <Borders borders={updatedBorders} />
    </div>
  )
}
