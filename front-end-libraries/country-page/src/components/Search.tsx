import { useDataContext } from "../AppContext"

type Props = {}

export default function Search({}: Props) {
  const { filters, setFilters } = useDataContext()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFilters((prev) => ({ ...prev, query: event.target.value }))
  }
  return (
    <div className="gap-3 w-2/3 flex m-auto rounded-xl bg-componentClr">
      <img src="/Search.svg" alt="" className="pl-3" />
      <input
        type="text"
        name="search"
        placeholder="Search by Name, Region, Subregion"
        value={filters.query}
        onChange={handleSearch}
        className="py-3 rounded-xl w-full bg-componentClr  outline-none"
      />
    </div>
  )
}
