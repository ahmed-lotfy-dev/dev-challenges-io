import { useContext } from "react"
import { AppContext } from "../AppContext"

type Props = {}

export default function ProfileDetails({}: Props) {
  const { profileData } = useContext(AppContext)

  return (
    <div className="text-start mx-7">
      <h1 className="text-mainText capitalize font-bold">
        {profileData?.login}
      </h1>
      <p className="text-bodyText mt-2">{profileData?.bio}</p>
    </div>
  )
}
