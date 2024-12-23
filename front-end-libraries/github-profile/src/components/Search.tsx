import { useState } from "react"
import useDebounce from "../hooks/useDebounce"
import SearchResults from "./SearchResults"

export default function Search() {
  const [searchValue, setSearchValue] = useState("")
  const debouncedValue = useDebounce(searchValue, 2000)

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  console.log({ searchValue, debouncedValue })

  return (
    <div className="w-full flex justify-center items-center absolute top-[50px] left-0 ">
      <div className="w-[65%] md:w-[55%] lg:w-[35%] flex justify-center items-center group bg-pageBgColor rounded-xl">
        <svg
          className="ml-5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="#4a5567" strokeWidth="2" />
          <path
            d="M20 20L17 17"
            stroke="#4a5567"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          className="w-full md:max-w-lg ml-5 z-[998] py-4 rounded-xl placeholder:text-clrNotKnow2 bg-pageBgColor focus:outline-none group-focus:outline:none group-focus:outline-textColor2"
          onChange={searchHandler}
        />
      </div>
      <SearchResults debouncedValue={debouncedValue} />
    </div>
  )
}
