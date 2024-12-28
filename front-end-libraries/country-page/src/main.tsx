import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import AppContext from "./AppContext.tsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./routes/Home.tsx"
import Country from "./routes/Country.tsx"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContext>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":countryName" element={<Country />} />
        </Route>
      </Routes>
    </AppContext>
  </BrowserRouter>
)
