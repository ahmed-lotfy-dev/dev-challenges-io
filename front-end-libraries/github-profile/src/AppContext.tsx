import { createContext, ReactNode, useState } from "react"

export type AppContextType = {
  username: string
  defaultUsername: string
  isSearching: boolean
  profileData: ProfileDataType | null
  reposData: ReposDataType | null
  reposCount: number
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType | null>>
  setReposData: React.Dispatch<React.SetStateAction<ReposDataType | null>>
  setDefaultUsername: React.Dispatch<React.SetStateAction<string>>
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
  setReposCount: React.Dispatch<React.SetStateAction<number>>
}

export type ProfileDataType = {
  avatar_url: string
  followers: number
  following: number
  location: string
  login: string
  bio: string
}

export type ReposDataType = Array<{
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  license: {}
  updated_at: string
  forks_count: number
}>

const AppContext = createContext<AppContextType>(null!)

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("github")
  const [profileData, setProfileData] = useState<ProfileDataType | null>(null)
  const [reposData, setReposData] = useState<ReposDataType | null>(null)
  const [defaultUsername, setDefaultUsername] = useState("github")
  const [isSearching, setIsSearching] = useState(false)
  const [reposCount, setReposCount] = useState(4)

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        defaultUsername,
        setDefaultUsername,
        isSearching,
        setIsSearching,
        profileData,
        setProfileData,
        reposData,
        setReposData,
        reposCount,
        setReposCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext }
