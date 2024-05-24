import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Menu() {
  return (
    <header className="w-full px-28 pt-7 flex flex-col gap-16 ">
      <div className="flex justify-end gap-8">
        <div className="flex gap-1 items-center justify-center">
          <Link className="text-xl flex items-center gap-1 hover:opacity-75 transition-all" to='#'>
            <FaRegUser className="w-6 h-6" />
            Perfil
          </Link>
        </div>

        <div className="flex gap-2 items-center justify-center">
          <Link className="text-xl flex items-center gap-1 hover:opacity-75 transition-all" to='#'>
            <PiShoppingCartSimpleBold className="w-6 h-6" />
            Items
          </Link>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <span className="text-xl text-gray-600 opacity-[0.5]  cursor-pointer hover:opacity-75 transition-all">R$ 2000</span>
          <IoSearch className="w-6 h-6 cursor-pointer hover:opacity-75 transition-all" />
        </div>
      </div>

      <nav className="w-full flex items-center  justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-10 text-blue-400" />
            <p className="font-bold text-lg">E-commerce</p>
          </Link>
        </div>

        <div>
          <ul className="flex gap-9  font-sans">
            <Link className="text-2xl font-semibold hover:opacity-75 transition-all hover:text-blue-900" to="#">INICIO</Link>
            <Link className="text-2xl font-semibold hover:opacity-75 transition-all hover:text-blue-900" to="#">TÊNIS</Link>
            <Link className="text-2xl font-semibold hover:opacity-75 transition-all hover:text-blue-900" to="#">BOLSAS</Link>
            <Link className="text-2xl font-semibold hover:opacity-75 transition-all hover:text-blue-900" to="#">ÓCULOS</Link>
            <Link className="text-2xl font-semibold hover:opacity-75 transition-all hover:text-blue-900" to="#">CONTATO</Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}
