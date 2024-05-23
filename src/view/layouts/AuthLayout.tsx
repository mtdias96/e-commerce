import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center flex-col gap-16">
        <Logo className="text-blue-500 h-16" />

        <div className="px-8 w-full max-w-[504px] ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
