// import { useState } from "react";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoSearch } from "react-icons/io5";
// import { RxCross1, RxExit, RxHamburgerMenu } from "react-icons/rx";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../app/hooks/useAuth";
// import { Logo } from "./Logo";

// export function Menu() {
//   const { signedIn, signout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="w-full fixed top-0 left-0 right-0 z-10">
//       <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
//         <p className="text-white text-sm">Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.</p>
//         <Link className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all" to='/cadastrar'>Inscreva-se agora</Link>
//       </div>

//       <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
//         <Link to="/" className="hover:opacity-75 transition-all flex items-center gap-3">
//           <Logo className="w-8" />
//           <p className="text-2xl font-bold">NEWBOOT</p>
//         </Link>

//         <nav className="hidden md:flex gap-9 items-center">
//           <ul className="flex gap-9 items-center">
//             <li><Link to="#" className="hover:opacity-65 transition-all">Novidades</Link></li>
//             <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
//           </ul>
//         </nav>

//         <div className="hidden md:flex items-center p-2.5 gap-3 bg-gray-200 rounded-full w-[500px]">
//           <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
//           <input
//             type="text"
//             placeholder="Procurar por produto..."
//             className="outline-none bg-transparent placeholder:text-slate-400"
//           />
//         </div>

//         <div className="flex gap-6 items-center">
//           <Link to="/perfil" className="hover:opacity-65 transition-all">
//             <FaRegCircleUser className="w-6 h-6" />
//           </Link>
//           <Link to="/carrinho" className="hover:opacity-65 transition-all">
//             <FiShoppingCart className="w-6 h-6" />
//           </Link>
//           {signedIn && (
//             <Link to='/'>
//               <RxExit onClick={signout} className="w-6 h-6 hover:opacity-65 transition-all" />
//             </Link>
//           )}

//           <button
//             className="md:hidden flex items-center justify-center w-8 h-8"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       <nav className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden`}>
//         <ul className="flex flex-col items-center gap-4 p-4">
//           <li><Link to="#" className="hover:opacity-65 transition-all">Categorias</Link></li>
//           <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
//           <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
//           <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
//           <li><Link to="#" className="hover:opacity-65 transition-all">Óculos</Link></li>
//           <li><Link to="#" className="hover:opacity-65 transition-all">Bolsas</Link></li>
//           <li><Link to="#" className="hover:opacity-65 transition-all">Promoções</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Menu;

// import { useState } from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoSearch } from "react-icons/io5";
// import { RxCross1, RxExit, RxHamburgerMenu } from "react-icons/rx";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../app/hooks/useAuth";
// import { Logo } from "./Logo";

// export function Menu() {
//   const { signedIn, signout } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="w-full fixed top-0 left-0 right-0 z-10">
//       <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
//         <p className="text-white text-sm">Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.</p>
//         <Link className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all" to='/cadastrar'>Inscreva-se agora</Link>
//       </div>

//       <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
//         <Link to="/" className="hover:opacity-75 transition-all flex items-center gap-3">
//           <Logo className="w-8" />
//           <p className="text-2xl font-bold">NEWBOOT</p>
//         </Link>

//         <nav className="hidden xl:flex gap-9 items-center">
//           <ul className="flex gap-9 items-center">
//             <li><Link to="#" className="hover:opacity-65 transition-all">Novidades</Link></li>
//             <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
//           </ul>
//         </nav>

//         <div className="flex items-center p-2.5 gap-3 bg-gray-200 rounded-full w-[500px]">
//           <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
//           <input
//             type="text"
//             placeholder="Procurar por produto..."
//             className="outline-none bg-transparent placeholder:text-slate-400"
//           />
//         </div>

//         <div className="flex gap-6 items-center">
//           <Link to="/perfil" className="hover:opacity-65 transition-all hidden xl:flex">
//             <IoSearch className="w-6 h-6" />
//           </Link>
//           <Link to="/carrinho" className="hover:opacity-65 transition-all">
//             <FiShoppingCart className="w-6 h-6" />
//           </Link>
//           {signedIn && (
//             <Link to='/'>
//               <RxExit onClick={signout} className="w-6 h-6 hover:opacity-65 transition-all" />
//             </Link>
//           )}

//           <button
//             className="xl:hidden flex items-center justify-center w-8 h-8"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} xl:hidden`}>
//         <nav className="flex flex-col items-center gap-4 p-4">
//           <ul className="flex flex-col gap-4">
//             <li><Link to="#" className="hover:opacity-65 transition-all">Categorias</Link></li>
//             <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Óculos</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Bolsas</Link></li>
//             <li><Link to="#" className="hover:opacity-65 transition-all">Promoções</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Menu;


import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RxCross1, RxExit, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/hooks/useAuth";
import { Logo } from "./Logo";

export function Menu() {
  const { signedIn, signout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10">
      <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
        <p className="text-white text-sm">Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.</p>
        <Link className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all" to='/cadastrar'>Inscreva-se agora</Link>
      </div>

      <div className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
        <Link to="/" className="hover:opacity-75 transition-all flex items-center gap-3">
          <Logo className="w-8" />
          <p className="text-2xl font-bold">NEWBOOT</p>
        </Link>

        <nav className="hidden xl:flex gap-9 items-center">
          <ul className="flex gap-9 items-center">
            <li><Link to="#" className="hover:opacity-65 transition-all">Novidades</Link></li>
            <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
            <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
            <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
          </ul>
        </nav>

        <div className="items-center p-2.5 gap-3 bg-gray-200 rounded-full w-[500px] hidden md:flex">
          <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
          <input
            type="text"
            placeholder="Procurar por produto..."
            className="outline-none bg-transparent placeholder:text-slate-400"
          />
        </div>

        <div className="flex gap-6 items-center">
          <button className="block md:hidden">
            <IoSearch className="w-6 h-6" />
          </button>
          <Link to="/carrinho" className="hover:opacity-65 transition-all">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
          {signedIn && (
            <Link to='/'>
              <RxExit onClick={signout} className="w-6 h-6 hover:opacity-65 transition-all" />
            </Link>
          )}

          <button
            className="xl:hidden flex items-center justify-center w-8 h-8"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <nav className={`xl:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden`}>
        <ul className="flex flex-col items-center gap-4 p-4">
          <li><Link to="#" className="hover:opacity-65 transition-all">Categorias</Link></li>
          <li><Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Masculino</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Feminino</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Óculos</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Bolsas</Link></li>
          <li><Link to="#" className="hover:opacity-65 transition-all">Promoções</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
