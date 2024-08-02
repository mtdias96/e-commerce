import { useEffect, useState } from "react";
import { LuListFilter } from "react-icons/lu";
import MenuFilter from "../MenuFilter";

type AsideMenuProps = {
  productQuantity: number
}

export function AsideMenu({ productQuantity }: AsideMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className="w-full flex justify-center items-center relative bg-black/90 p-4">
      <div className="w-full flex justify-between items-center gap-10 mx-20">

        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={toggleMenu}></div>
        )}
        <div className={`fixed inset-y-0 right-0 bg-white z-50 h-full w-full sm:w-2/3 md:max-w-[654px] transition-transform transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <MenuFilter toggleMenu={toggleMenu} />
        </div>

        <div className="flex gap-2 font-medium text-sm text-white">
          <span>{productQuantity}</span>
          <h2>
            {productQuantity >= 1 ? 'produtos' : 'produto'}
          </h2>
        </div>

        <div className="text-white">
          <button
            type="button"
            className="font-bold flex items-center gap-2 hover:opacity-60 transition-all"
            onClick={toggleMenu}
          >
            <LuListFilter />
            Filtrar
          </button>
        </div>

        <div className="hidden md:block text-white">
          <span className="mr-2">Ordenar Por</span>
          <select className="font-bold outline-none bg-black/90 ">
            <option className="text-xs h-8" value="">Mais recentes</option>
            <option className="text-sm" value="">Mais vendidos</option>
            <option className="text-xs" value="">Descontos</option>
            <option className="text-xs" value="">Maior preço</option>
            <option className="text-xs" value="">Menor preço</option>
          </select>
        </div>
      </div>
    </div>
  );
}
