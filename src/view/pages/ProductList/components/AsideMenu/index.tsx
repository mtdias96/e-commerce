import { FilterItem } from './FilterItem';

const AsideMenu = () => {
  return (
    <div className="w-64 p-4 bg-transparent border overflow-visible">
      <FilterItem
        title="Marcas"
        options={['Nike', 'Adiddas', 'Mizuno']}
      />
      <FilterItem
        title="Tamanhos"
        options={['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']} />
      <FilterItem
        title="Cores"
        options={['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Preto', 'Branco']} />
      <FilterItem
        title="Preços"
        options={['R$100 - R$300', 'R$300 - R$600', 'R$600 - R$900', 'R$900 - R$1200', 'R$1200 - R$1500', 'R$1500 - R$2000']}
      />
    </div>
  );
};

export default AsideMenu;


