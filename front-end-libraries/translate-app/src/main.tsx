import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

import { LanguageStateProvider } from "./LanguageContext.tsx"
createRoot(document.getElementById("root")!).render(
    <LanguageStateProvider>
      <App />
    </LanguageStateProvider>
)
