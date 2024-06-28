
import { CardProduct } from '../../components/CardProduct';
import Menu from '../../components/Menu';
import AsideMenu from './components/AsideMenu';
import { useProductListController } from './useProductListController';

export function ProductList() {
  const { products } = useProductListController()
  return (
    <>
      <Menu />
      <section className="mt-48 w-full flex px-8">
        <AsideMenu />

        <div className="flex flex-wrap justify-center w-40 gap-12 flex-grow">
          {products?.map((product) => (
            <div className='w-[350px]' key={product.id}>
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
