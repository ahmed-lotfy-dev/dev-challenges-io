import { useDataContext } from "../AppContext"
import Search from "../components/Search"
import Table from "../components/Table"
import Filters from "../components/Filters"

type Props = {}

export default function Home({}: Props) {
  const { countriesData, filters, setFilters } = useDataContext()

  if (!countriesData) return <h2>No Countires Data Present</h2>

  return (
    <div className="w-full grid grid-cols-3 px-5 m-auto text-textColor font-vietnam md:w-[85%] md:m-auto md:border-[0.5px] md:border-componentClr md:rounded-2xl bg-pageBgColor -translate-y-20">
      <div className="w-full py-10 flex items-center col-span-3">
        <p className="flex-1 font-semibold w-1/3">
          Found {filters.countriesCount} Countires
        </p>
        <Search />
      </div>
      <Filters filters={filters} setFilters={setFilters} />
      <Table />
    </div>
  )
}
