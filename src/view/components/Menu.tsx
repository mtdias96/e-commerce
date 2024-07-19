
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/hooks/useAuth";
import { Logo } from "./Logo";

export function Menu() {
  const { signedIn, signout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1228 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full top-0 fixed left-0 right-0 z-10">
      <div className="w-full bg-black hidden md:flex gap-3 items-center justify-center h-10">
        <TbTruckDelivery className="text-white w-6 h-6 -scale-x-100" />
        <p className="text-white text-sm">Frete grátis para sudeste a partir de R$ 299</p>
      </div>

      <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
        <Link to="/" className="hover:opacity-75 transition-all flex items-center gap-3">
          <Logo className="w-8" />
          <p className="text-2xl font-bold hidden md:block">NEWBOOT</p>
        </Link>

        <nav className={`xl:flex gap-9 items-center ${isMobile ? 'hidden' : 'flex'}`}>
          <ul className="flex gap-9 items-center">
            <li><Link to="#" className="hover:opacity-65 transition-all">Novidades</Link></li>
            <li><Link to="/produtos" className="hover:opacity-65 transition-all">Tênis</Link></li>
            <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
            <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
          </ul>
        </nav>

        <div className={`items-center p-2.5 gap-3 bg-gray-200 rounded-full w-[500px] ${!isMobile ? 'flex' : 'hidden md:flex'}`}>
          <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
          <input
            type="text"
            placeholder="Procurar por produto..."
            className="outline-none bg-transparent placeholder:text-slate-400"
          />
        </div>

        <div className="flex gap-6 items-center">
          {/* <Link to='/perfil'>
            <FaRegCircleUser className="w-6 h-6" />
          </Link> */}
          <button className={`block md:hidden ${isMobile ? 'flex' : 'hidden'}`}>
            <IoSearch className="w-6 h-6" />
          </button>
          <Link to="/carrinho" className="hover:opacity-65 transition-all">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
          {/* {signedIn && (
            <Link to='/'>
              <RxExit onClick={signout} className="w-6 h-6 hover:opacity-65 transition-all" />
            </Link>
          )} */}
          {/* ${isMobile && 'hidden'} */}
          <button
            className={`xl:hidden flex items-center justify-center w-8 h-8`}
            onClick={toggleMenu}
          >

            {isMenuOpen ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6 " />}
          </button>
        </div>
      </div>

      <nav className={`xl:hidden bg-white shadow-lg transition-all duration-300 ease-in-out  ${isMenuOpen ? "max-h-screen" : "max-h-0"}  overflow-hidden`}>
        <ul className="flex flex-col items-center gap-4 p-4">
          <li><Link to="adicionarProduto" className="hover:opacity-65 transition-all">Adicionar Produtos</Link></li>
          <li><Link to="/produtos" className="hover:opacity-65 transition-all">Tênis</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
          {signedIn && (
            <li><Link to="#" onClick={signout} className="hover:opacity-65 transition-all">Sair</Link></li>
          )}

        </ul>
      </nav>
    </header>
  );
}

export default Menu;
