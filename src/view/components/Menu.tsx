import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Menu() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10">

      <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
        <p className="text-white text-sm">Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.</p>
        <Link className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all" to='/cadastrar'>Inscreva-se agora</Link>
      </div>

      <div className="w-full px-24 py-9 flex justify-between items-center gap-8 bg-white shadow-md">
        <Link to="/" className="hover:opacity-75 transition-all">
        <div className="flex items-center gap-3">
          <Logo className="w-8" />
          <p className="text-2xl font-bold">NEWBOOT</p>
        </div>
        </Link>

        <nav>
          <ul className="flex gap-9 items-center">
            <Link to="#" className="hover:opacity-65 transition-all">Novidades</Link>
            <Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link>
            <Link to="#" className="hover:opacity-65 transition-all">Masculino</Link>
            <Link to="#" className="hover:opacity-65 transition-all">Feminino</Link>
          </ul>
        </nav>

        <div className="flex items-start p-2.5 gap-3 bg-gray-200 rounded-full  w-[500px] max-xl:hidden">
          <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
          <input
            type="text"
            placeholder="Procurar por produto..."
            className="outline-none bg-transparent placeholder:text-slate-400 "
          />
        </div>

        <div className="flex gap-6">
          <Link to="/" className="hover:opacity-65 transition-all">
            <FaRegCircleUser className="w-6 h-6" />
          </Link>

          <Link className="hover:opacity-65 transition-all" to="/">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Menu
