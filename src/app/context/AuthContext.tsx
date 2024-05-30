import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContexrValue {
  signedIn: boolean,
  signin(accessToken: string): void,
  signout(): void
}

export const AuthContext = createContext({} as AuthContexrValue)

export function AuthProvider({children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storageAccesToken = localStorage.getItem(localStorageKeys.ACCES_TOKEN)

    return !!storageAccesToken
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCES_TOKEN, accessToken)
    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCES_TOKEN)
    setSignedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{signedIn, signin, signout}}>
      {children}
    </AuthContext.Provider>

  )
}

