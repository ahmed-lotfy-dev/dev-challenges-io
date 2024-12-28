export interface ApiResponseItem {
  altSpellings: string[]
  area: number
  borders?: string[]
  capital: string[]
  capitalInfo: {
    latlng: number[]
  }
  car: {
    signs: string[]
    side: string
  }
  cca2: string
  cca3: string
  ccn3: string
  coatOfArms: Record<string, unknown>
  continents: string[]
  currencies: Record<string, { name: string; symbol: string }>
  demonyms: Record<string, { f: string; m: string }>
  flag: string
  flags: {
    png: string
    svg: string
  }
  subregion: string
  idd: {
    root: string
    suffixes: string[]
  }
  independent: boolean
  landlocked: boolean
  languages: Record<string, string>
  latlng: number[]
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  name: {
    common: string
    official: string
    nativeName: Record<string, { official: string; common: string }>
  }
  population: number
  region: string
  startOfWeek: string
  status: string
  timezones: string[]
  tld: string[]
  translations: Record<string, { official: string; common: string }>
  unMember: boolean
}

export type ApiResponse = ApiResponseItem[]
