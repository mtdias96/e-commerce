import { FaRegCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import { FiShoppingCart } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/hooks/useAuth";
import { Logo } from "./Logo";

export function Menu() {
  const {signedIn, signout} = useAuth()
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
          <Link to="/perfil" className="hover:opacity-65 transition-all">
            <FaRegCircleUser className="w-6 h-6" />
          </Link>

          <Link className="hover:opacity-65 transition-all" to="/">
            <FiShoppingCart className="w-6 h-6" />
          </Link>

          {signedIn &&
          <Link to='/'>
            <RxExit onClick={signout} className="w-6 h-6 hover:opacity-65 transition-all" />
          </Link>
          }
        </div>
      </div>
    </header>
  )
}

export default Menu

// import { FaRegCircleUser } from "react-icons/fa6";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoSearch } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { Logo } from "./Logo";

// export function Menu() {
//   return (
//     <header className="w-full fixed top-0 left-0 right-0 z-10">

//       <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
//         <p className="text-white text-sm">Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.</p>
//         <Link className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all" to='/cadastrar'>Inscreva-se agora</Link>
//       </div>

//       <div className="w-full px-6 md:px-24 py-4 md:py-9 flex justify-between items-center bg-white shadow-md">
//         <Link to="/" className="hover:opacity-75 transition-all">
//           <div className="flex items-center gap-3">
//             <Logo className="w-8" />
//             <p className="text-2xl font-bold">NEWBOOT</p>
//           </div>
//         </Link>

//         {/* Menu principal */}
//         <nav className="hidden md:flex items-center gap-9">
//           <Link to="#" className="hover:opacity-65 transition-all">Novidades</Link>
//           <Link to="/shop/product" className="hover:opacity-65 transition-all">Tênis</Link>
//           <Link to="#" className="hover:opacity-65 transition-all">Masculino</Link>
//           <Link to="#" className="hover:opacity-65 transition-all">Feminino</Link>
//         </nav>

//         {/* Ícone do menu hamburguer para dispositivos móveis */}
//         <div className="md:hidden">
//           <button className="text-gray-600 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Menu de busca para dispositivos móveis */}
//         <div className="flex md:hidden items-center">
//           <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
//           <input
//             type="text"
//             placeholder="Procurar por produto..."
//             className="outline-none bg-transparent placeholder-text-slate-400"
//           />
//         </div>

//         {/* Ícones de usuário e carrinho */}
//         <div className="flex gap-6">
//           <Link to="/" className="hover:opacity-65 transition-all">
//             <FaRegCircleUser className="w-6 h-6" />
//           </Link>

//           <Link className="hover:opacity-65 transition-all" to="/">
//             <FiShoppingCart className="w-6 h-6" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Menu;


// import { useState } from 'react';
// import { FaRegCircleUser } from 'react-icons/fa6';
// import { FiShoppingCart } from 'react-icons/fi';
// import { IoSearch } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
// import { Logo } from './Logo';

// export function Menu() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="w-full fixed top-0 left-0 right-0 z-10">
//       <div className="w-full bg-black flex gap-3 items-center justify-center h-10">
//         <p className="text-white text-sm">
//           Cadastre-se e ganhe 10% de desconto no seu primeiro pedido.
//         </p>
//         <Link
//           className="text-white border-b-2 border-white text-sm hover:opacity-75 transition-all"
//           to="/cadastrar"
//         >
//           Inscreva-se agora
//         </Link>
//       </div>

//       <div className="w-full px-6 md:px-24 py-4 md:py-9 flex justify-between items-center bg-white shadow-md">
//         {/* Menu hamburguer */}
//         <div className="md:hidden">
//           <button
//             className="text-gray-600 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Logo ou menu hamburguer */}
//         <div className="flex items-center gap-3">
//           {menuOpen ? (
//             <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
//                 <p className="text-lg font-semibold mb-4">Menu</p>
//                 <ul className="text-gray-700">
//                   <li className="py-2 hover:text-gray-900 transition-all">
//                     <Link to="#">Novidades</Link>
//                   </li>
//                   <li className="py-2 hover:text-gray-900 transition-all">
//                     <Link to="/shop/product">Tênis</Link>
//                   </li>
//                   <li className="py-2 hover:text-gray-900 transition-all">
//                     <Link to="#">Masculino</Link>
//                   </li>
//                   <li className="py-2 hover:text-gray-900 transition-all">
//                     <Link to="#">Feminino</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <Link to="/" className="hover:opacity-75 transition-all">
//               <div className="flex items-center gap-3">
//                 <Logo className="w-8" />
//                 <p className="text-2xl font-bold">NEWBOOT</p>
//               </div>
//             </Link>
//           )}
//         </div>

//         {/* Ícones de usuário e carrinho */}
//         <div className="flex gap-6">
//           <Link to="/" className="hover:opacity-65 transition-all">
//             <FaRegCircleUser className="w-6 h-6" />
//           </Link>

//           <Link className="hover:opacity-65 transition-all" to="/">
//             <FiShoppingCart className="w-6 h-6" />
//           </Link>
//         </div>
//       </div>

//       {/* Menu de busca para dispositivos móveis */}
//       <div className="flex md:hidden items-center justify-center mt-2">
//         <IoSearch className="w-6 h-6 text-gray-500 cursor-pointer hover:opacity-75 transition-all" />
//         <input
//           type="text"
//           placeholder="Procurar por produto..."
//           className="outline-none bg-transparent placeholder-text-slate-400 mx-2"
//         />
//       </div>
//     </header>
//   );
// }

// export default Menu;


