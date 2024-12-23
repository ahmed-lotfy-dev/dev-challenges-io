import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import AppContext from "./AppContext.tsx"
import { BrowserRouter, Routes, Route } from "react-router"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContext>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </AppContext>
  </BrowserRouter>
)
