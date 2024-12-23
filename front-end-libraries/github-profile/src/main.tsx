import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import AppContext from "./AppContext.tsx"
import { QueryClientProvider,QueryClient } from "react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppContext>
      <App />
    </AppContext>
  </QueryClientProvider>
)
