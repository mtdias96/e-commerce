import { RiCloseLargeLine } from "react-icons/ri";
import { FilterItem } from "./components/FilterItem";
import TagFilter from "./components/TagFilter";


type AsideMenuProps = {
  toggleMenu: () => void
}

function MenuFilter({ toggleMenu }: AsideMenuProps) {
  return (
    <div className="h-full shadow-lg z-50 w-full">
      <div className="bg-white px-8 h-full overflow-auto">
        <div className="flex justify-between border-b py-6">
          <h1 className="font-bold text-xl">Filtrar</h1>
          <button onClick={toggleMenu}>
            <RiCloseLargeLine className="w-[22px] h-[22px]" />
          </button>
        </div>

        <TagFilter />

        <FilterItem
          title="Marcas"
          options={['Nike', 'Adidas', 'Mizuno', 'Vans', 'Jordan', 'Palace', 'Obey', 'New Balance', 'Oakley']}
        />

        <FilterItem
          title="Tamanhos"
          sizes={['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']}
        />

        <FilterItem
          title="Cores"
          options={['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Preto', 'Branco']}
        />

        <FilterItem
          title="Gêneros"
          options={["Masculino", "Feminino", "Infantil"]}
        />
        <FilterItem
          title="Preços"
          options={['R$100 - R$300', 'R$300 - R$600', 'R$600 - R$900', 'R$900 - R$1200', 'R$1200 - R$1500', 'R$1500 - R$2000']}
        />
      </div>
    </div>
  );
}

export default MenuFilter;
