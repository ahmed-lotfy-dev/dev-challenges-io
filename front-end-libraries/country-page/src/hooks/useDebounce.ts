import {  useEffect, useState } from "react"

export default function useDebounce(query: string, time: number) {
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(query)
    }, time)

    return () => {
      clearTimeout(handler)
    }
  })
  return searchQuery
}
