import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps{
  isPrivate: boolean
}

export function AuthGuard({isPrivate} : AuthGuardProps) {
  const signedIn = true;

  if(!signedIn && isPrivate){
   return <Navigate to="/entrar" replace/>
  }

  if(signedIn && !isPrivate){
    return <Navigate to="/cadastrar" replace/>
  }

  return <Outlet />
}
