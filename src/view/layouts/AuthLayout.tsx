import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export function AuthLayout() {
  return (
    <div className="h-full w-full">
      <Menu/>
      <div className="flex h-full w-full items-center justify-center flex-col gap-16">
        <div className="px-8 w-full max-w-[504px] ">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
