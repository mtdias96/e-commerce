import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { Router } from "./Router"
import { AuthProvider } from "./app/context/AuthContext"

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster/>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
