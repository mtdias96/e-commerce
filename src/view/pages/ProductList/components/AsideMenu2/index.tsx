import { useEffect, useState } from "react";
import { LuListFilter } from "react-icons/lu";
import AsideMenu from "../AsideMenu";

type AsideMenu2Props = {
  productQuantity: number
}

export function AsideMenu2({ productQuantity }: AsideMenu2Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(typeof productQuantity);

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
    <div className="w-full flex justify-between items-center  flex-1 relative px-10">
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div className={`fixed inset-y-0 right-0 bg-white z-50 h-full w-1/2 transition-transform transform  duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <AsideMenu toggleMenu={toggleMenu} />
      </div>

      <div className="flex gap-2 font-medium text-sm">
        <span>{productQuantity}</span>
        <h2>
          {productQuantity >= 1 ? 'produtos' : 'produto'}
        </h2>
      </div>

      <div className="w-full flex justify-end flex-1 md:mr-10 md:gap-10 md:justify-center">
        <div className="flex  items-center gap-2">
          <button
            type="button"
            className="font-bold flex items-center gap-1 hover:opacity-60 transition-all"
            onClick={toggleMenu}
          >
            <LuListFilter />

            Filtrar

          </button>
        </div>

        <div className="hidden md:block">
          <span>Ordenar Por</span>
          <select className="font-bold outline-none">
            <option className="text-xs" value="">Mais recentes</option>
            <option className="text-xs" value="">Mais vendidos</option>
            <option className="text-xs" value="">Descontos</option>
            <option className="text-xs" value="">Maior preço</option>
            <option className="text-xs" value="">Menor preço</option>
          </select>
        </div>
      </div>
    </div>
  );
}
