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
    <div className="w-full flex justify-center items-center absolute top-[50px] left-0">
        <svg
          className="absolute left-[20%] md:left-[20%] lg:left-[28%] xl:left-[40%] z-[999]"
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
        className="w-2/3 md:max-w-lg m-auto z-[998] pl-14 py-4 rounded-xl placeholder:text-clrNotKnow2 bg-pageBgColor focus:bg-pageBgColor focus:outline-none outline:none focus:outline-textColor2"
        onChange={searchHandler}
      />
      <SearchResults debouncedValue={debouncedValue} />
    </div>
  )
}
