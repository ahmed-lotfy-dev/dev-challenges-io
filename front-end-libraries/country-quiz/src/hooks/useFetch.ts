import { useEffect, useState } from "react"

export default function useFetch(url: string) {
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    setIsLoading(true)
    try {
      fetchData()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(String(error))
      }
    } finally {
      setIsLoading(false)
    }
    return () => {}
  }, [])
  return { data, isLoading, error }
}
