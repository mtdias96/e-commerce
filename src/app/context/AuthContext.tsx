import { createContext } from "react";

interface AuthContexrValue {
  signedIn: boolean
}

export const AuthContext = createContext({} as AuthContexrValue)

export function AuthProvider({children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{signedIn: true}}>
      {children}
    </AuthContext.Provider>

  )
}

