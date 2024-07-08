import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { Router } from "./Router"
import { AuthProvider } from "./app/context/AuthContext"
import { CartProvider } from "./app/context/CartContext"
import { FilterProvider } from "./app/context/FilterContext"

const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <FilterProvider>
          <CartProvider>
            <Router />
            <Toaster />
          </CartProvider>
        </FilterProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
