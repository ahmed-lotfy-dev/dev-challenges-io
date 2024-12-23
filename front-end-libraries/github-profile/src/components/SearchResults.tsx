import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContext"

type Props = {
  debouncedValue: string
}

type User = {
  id: number
  login: string
  avatar_url: string
}

export default function SearchResults({ debouncedValue }: Props) {
  const { setUsername, setReposCount } = useContext(AppContext)
  const [userList, setUserList] = useState<User[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)

  const userClickHandler = (username: any) => {
    setUsername(username.login)
    setReposCount(4)

    setShowSearchResults(false)
  }

  useEffect(() => {
    if (!!debouncedValue) {
      const fetchUsers = async (): Promise<User[]> => {
        const users = await fetch(
          `https://api.github.com/search/users?q=${debouncedValue}`
        ).then((response) => response.json())
        setUserList(users.items)
        return users.items
      }
      fetchUsers()
      setShowSearchResults(true)
    } else {
      setUserList([])
      setShowSearchResults(false)
    }
  }, [debouncedValue])

  return (
    <div
      className={`absolute h-[320px] w-[65%] md:w-[55%] lg:w-[35%] overflow-y-auto no-scrollbar top-0 mt-[12%] sm:mt-[9%] md:mt-[9%] lg:mt-[6%] xl:mt-[4.5%] rounded-xl bg-pageBgColor cursor-pointer border-2 border-textColor2 ${
        showSearchResults ? "absolute" : "hidden"
      }`}
    >
      {userList &&
        userList.map((user: User) => (
          <div
            className="p-2 flex gap-3"
            key={user.id}
            onClick={() => userClickHandler(user)}
          >
            <img src={user.avatar_url} alt={user.login} className="w-[100px]" />
            <p>{user.login}</p>
          </div>
        ))}
    </div>
  )
}
