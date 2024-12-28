import { Dispatch, SetStateAction } from "react"
import { filtersType } from "../AppContext"

type Props = {
  filters: { sortBy: string; isUnMember: boolean; isIndependant: boolean }
  setFilters: Dispatch<SetStateAction<filtersType>>
}

export default function Filters({ filters, setFilters }: Props) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, sortBy: event.target.value }))
  }

  const handleUnMember = () => {
    setFilters((prev) => ({ ...prev, isUnMember: !filters.isUnMember }))
  }

  const handleIndependant = () => {
    setFilters((prev) => ({ ...prev, isIndependant: !filters.isIndependant }))
  }

  const handleRegion = (event: React.MouseEvent<HTMLInputElement>) => {
    const region = event.currentTarget.id
    setFilters((prev) => {
      const isAlreadySelected = prev.region.includes(region)
      const updatedRegions = isAlreadySelected
        ? prev.region.filter((r) => r !== region)
        : [...prev.region, region]
      return {
        ...prev,
        region: updatedRegions,
      }
    })
  }

  return (
    <div className="col-span-3 md:col-span-1">
      <div className="w-full flex flex-col text-start justify-between mb-10">
        <label
          htmlFor="countries"
          className="block mb-2 text-smallText text-activeBgFilter font-semibold dark:text-white"
        >
          Sort By
        </label>
        <select
          name="sortBy"
          id="sortBy"
          value={filters.sortBy}
          onChange={handleSortChange}
          className="bg-transparent focus:bg-componentClr border-componentClr border-2 rounded-md py-3 px-3"
        >
          <option value="population">Population</option>
          <option value="name">Name</option>
          <option value="area">Area</option>
        </select>
      </div>
      <div className="flex justify-between gap-2 flex-wrap  mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Americas"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Americas"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Americas
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Antarctic"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Antarctic"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Antarctic
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Africa"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Africa"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Africa
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Asia"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Asia"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Asia
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Europe"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Europe"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Europe
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="Oceania"
            className="peer hidden"
            onClick={handleRegion}
          />
          <label
            htmlFor="Oceania"
            className=" cursor-pointer rounded-md px-4 py-2  bg-pageBgColor
    peer-checked:bg-componentClr"
          >
            Oceania
          </label>
        </div>
      </div>
      <div className="text-start mb-10">
        <p className="text-activeBgFilter font-semibold text-medium mt-10 mb-5">
          Status
        </p>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isMember"
            id="isMember"
            className="appearance-none bg-transparent"
            onClick={handleUnMember}
          />
          <div className="border-[0.5px] rounded-[3px] w-6 h-6">
            <svg
              className={`bg-activeBgCheckbox rounded-[2px] ${filters.isUnMember ? "block" : "hidden"}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
                stroke="#D2D5DA"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <label htmlFor="isMember" className="ml-5">
            Member of the United Nation
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isMember"
            id="isIndependant"
            className="appearance-none peer hidden"
            onClick={handleIndependant}
          />
          <div className="border-[0.5px] rounded w-6 h-6">
            <svg
              className={`bg-activeBgCheckbox rounded ${filters.isIndependant ? "block" : "hidden"}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
                stroke="#D2D5DA"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <label htmlFor="isIndependant" className="ml-5">
            Independant
          </label>
        </div>
      </div>
    </div>
  )
}
