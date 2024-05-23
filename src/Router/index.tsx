import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../view/layouts/AuthLayout';
import { Home } from '../view/pages/Home';
import { Login } from '../view/pages/Login';
import { Register } from '../view/pages/Register';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<AuthLayout/>}>
            <Route path='/entrar' element={<Login />} />
            <Route path='/cadastrar' element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path='/' element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}
