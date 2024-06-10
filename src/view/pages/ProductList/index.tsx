import { AsideMenu } from '../../components/AsideMenu';
import { CardProduct } from '../../components/CardProduct';
import Menu from '../../components/Menu';
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
            <div className='w-[350px]'>
              <CardProduct key={product.id} image={product.image} id={product.id} name={product.name} price={product.price} />

            </div>
          ))}
        </div>
      </section>
    </>
  );
}
