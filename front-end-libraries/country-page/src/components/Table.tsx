import { NavLink } from "react-router"
import { useDataContext } from "../AppContext"
import { useEffect, useMemo } from "react"

export default function Table() {
  const { countriesData, filters, setFilters } = useDataContext()

  const sortedCountries = useMemo(() => {
    if (!countriesData) return []

    const sorted = [...countriesData]
    switch (filters.sortBy) {
      case "population":
        return sorted.sort((a, b) => b.population - a.population)
      case "area":
        return sorted.sort((a, b) => b.area - a.area)
      case "name":
        return sorted.sort((a, b) => a.name.common.localeCompare(b.name.common))
      default:
        return sorted
    }
  }, [countriesData, filters.sortBy])

  const filteredCountries = useMemo(() => {
    if (!countriesData) return []

    const filtered = sortedCountries.filter((country) => {
      const matchesIndependant =
        !filters.isIndependant || country.independent === filters.isIndependant

      const matchesUnMember =
        !filters.isUnMember || country.unMember === filters.isUnMember

      const matchesRegion =
        filters.region.length === 0 || filters.region.includes(country.region)

      return matchesIndependant && matchesUnMember && matchesRegion
    })

    if (!filters.query) return filtered

    const searchQuery = filters.query

    return filtered.filter((country) => {
      const countryName = country.name.common.toLowerCase()
      const region = country.region.toLocaleLowerCase()
      const subregion = country.subregion?.toLowerCase() || ""

      return (
        countryName.includes(searchQuery) ||
        region.includes(searchQuery) ||
        subregion.includes(searchQuery)
      )
    })
  }, [
    sortedCountries,
    filters.isUnMember,
    filters.isIndependant,
    filters.region,
    filters.query,
  ])

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      countriesCount: filteredCountries.length,
    }))
  }, [filteredCountries, sortedCountries])

  return (
    <div className="w-full m-auto text-textColor col-span-3 md:col-span-2 md:ml-5">
      <table className="table-fixed w-full">
        <thead className="border-b-componentClr border-b-2">
          <tr className="">
            <th className="text-start pb-3 text-activeBgFilter">Flag</th>
            <th className="text-start pb-3 text-activeBgFilter">Name</th>
            <th className="text-start pb-3 text-activeBgFilter">Population</th>
            <th className="text-start pb-3 text-activeBgFilter">
              Area(km<sup>2</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries?.map((country, index) => (
            <tr key={`${country.cca3}-${index}`}>
              <td className="w-20 pt-6">
                <NavLink to={`${country.name.common}`}>
                  <img
                    className="rounded-md w-20"
                    src={country.flags.svg}
                    alt=""
                  />
                </NavLink>
              </td>
              <td className="text-start">
                <NavLink to={`${country.name.common}`}>
                  {country.name.common}
                </NavLink>
              </td>
              <td className="text-start">
                {new Intl.NumberFormat().format(country.population)}
              </td>
              <td className="text-start">
                {new Intl.NumberFormat().format(country.area)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
