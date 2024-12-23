import { useContext } from "react"
import Repo from "./Repo"
import { AppContext } from "../AppContext"

export default function Repositories() {
  const { reposData, setReposCount } = useContext(AppContext)

  if (!Array.isArray(reposData) || reposData.length === 0) {
    return <h1>No Repositories Found</h1>
  }

  const handleLoadMore = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    setReposCount((prev) => prev + 4)
  }

  return (
    <div className="w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 py-5 px-7">
      {reposData &&
        reposData.map((repo) => {
          return (
            <a href={repo.html_url} target="_blank" key={repo.id}>
              <Repo key={repo.id} repo={repo} />
            </a>
          )
        })}
      <a
        href=""
        className="mt-4 col-span-1 md:col-span-full mb-16 block"
        onClick={handleLoadMore}
      >
        View all repositories
      </a>
    </div>
  )
}
