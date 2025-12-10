import App from "next/app"
import { create } from "zustand"

interface AppState {
  theme: string
  language: string
  setTheme: (theme: string) => void
  setLanguage: (language: string) => void
}

const useStore = create<AppState>()((set) => ({
  theme: "light",
  language: "defaultHTML",
  setTheme: (theme: string) => set((state) => ({ ...state, theme })),
  setLanguage: (language: string) => set((state)=>({...state, language })),
}))

export default useStore
