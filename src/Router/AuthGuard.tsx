import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthGuardProps{
  isPrivate: boolean
}

export function AuthGuard({isPrivate} : AuthGuardProps) {
  const {signedIn} = useAuth();

  if (!signedIn && isPrivate) {
    //Redireciona para o login
    return <Navigate to='/entrar' replace />
  }

  if (signedIn && !isPrivate) {
    //Redirecionar para / (deshboard)
    return <Navigate to='/' replace />
  }

  return <Outlet />
}
