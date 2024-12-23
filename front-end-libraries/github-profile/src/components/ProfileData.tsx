import { useContext } from "react"
import DataCard from "./DataCard"
import { AppContext } from "../AppContext"

export default function ProfileData() {
  const { profileData } = useContext(AppContext)

  if (!profileData) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full flex ">
      <div className="-mt-12">
        <img
          src={profileData.avatar_url}
          alt="GitHub Profile Image Placeholder"
          className="rounded-3xl ml-16 bg-pageBgColor p-3 w-[150px]"
        />
      </div>
      <div className="flex flex-col mt-[4%] ml-10 gap-4 md:flex-row md:ml-16 md:mt-4 mb-10 ">
        <DataCard label={"Followers"} data={profileData.followers} />
        <DataCard label={"Following"} data={profileData.following} />
        <DataCard label={"Location"} data={profileData.location} />
      </div>
    </div>
  )
}
