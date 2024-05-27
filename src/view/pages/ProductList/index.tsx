import { AsideMenu } from '../../components/AsideMenu';
import { CardProduct } from '../../components/CardProduct';
import Menu from '../../components/Menu';

export function ProductList() {

  return (
    <>
      <Menu />
      <section className="mt-48 w-full flex px-8">
        <AsideMenu/>

        <div className="flex flex-wrap justify-center gap-12 flex-grow">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardProduct key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
