import { useState, useEffect } from "react"

function useFetch<T>(url: string): { data: T | null;loading:boolean; error: any } {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const result = await response.json()
        if (isMounted) setData(result)
      } catch (err: any) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
