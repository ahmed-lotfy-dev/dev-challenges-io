import { useContext, useEffect } from "react"
import Repositories from "./components/Repositories"
import Search from "./components/Search"
import ProfileDetails from "./components/ProfileDetails"
import { AppContext, ProfileDataType, ReposDataType } from "./AppContext"
import useFetch from "./hooks/useFetch"
import ProfileData from "./components/ProfileData"

function App() {
  const { username, setProfileData, setReposData, reposCount, setUsername } =
    useContext(AppContext)

  const { data: profileData } = useFetch<ProfileDataType>(
    `https://api.github.com/users/${username}`
  )

  const { data: reposData } = useFetch<ReposDataType>(
    `https://api.github.com/users/${username}/repos?per_page=${reposCount}`
  )

  useEffect(() => {
    setProfileData(profileData)
    setReposData(reposData)
  }, [profileData, reposData])

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-[300px] bg-[url(src/assets/hero-image-github-profile.png)] bg-cover bg-no-repeat -z-50"></div>
      <div className="w-full  text-textColor1 max-w-6xl m-auto">
        <Search />
        <ProfileData />
        <ProfileDetails />
        <Repositories />
      </div>
    </div>
  )
}

export default App
