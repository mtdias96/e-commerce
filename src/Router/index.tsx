import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { AddProduct } from "../view/pages/AddProduct";
import { Home } from "../view/pages/Home";
import { Login } from "../view/pages/Login";
import { ProductCheckout } from "../view/pages/ProductCheckout";
import { ProductInfo } from "../view/pages/ProductInfo";
import { ProductList } from "../view/pages/ProductList";
import { Profile } from "../view/pages/Profile";
import { Register } from "../view/pages/Register";
import { AuthGuard } from "./AuthGuard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/perfil" element={<Profile />} />
          <Route path="/carrinho" element={<ProductCheckout />} />
          <Route path="/adicionarProduto" element={<AddProduct />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductInfo />} />
        <Route path="/produtos" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
