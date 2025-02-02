import { Country } from "../../types/country"
import { useQuery } from "@tanstack/react-query"

const BASE_URL = "https://restcountries.com/v3.1"

async function getAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/all`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching countries:", error)
    throw error
  }
}

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    retry: 3,
    staleTime: 5 * 60 * 1000,
  })
}
