import { useEffect, useState } from "react";
import { useFilter } from "../../../app/hooks/useFilter";
import { CardProduct } from "../../components/CardProduct";
import Menu from "../../components/Menu";
import { AsideMenu2 } from "./components/AsideMenu2";
import { useProductListController } from "./useProductListController";

export function ProductList() {
  const { products } = useProductListController();
  const { productFilter } = useFilter();
  const [quantity, setQuantity] = useState(0)


  useEffect(() => {
    if (productFilter.length > 0) {
      setQuantity(productFilter.length);
    } else {
      setQuantity(products?.length ?? 0);
    }
  }, [products, productFilter]);


  return (
    <div className='mt-32 relative'>
      <Menu />
      <AsideMenu2 productQuantity={quantity} />
      <section className="w-full flex px-8 mt-8">
        <div className="flex flex-wrap justify-center w-40 gap-12 flex-grow">
          {productFilter.length <= 0 && products?.map((product) => (
            <div className='w-[350px]' key={product.id}>
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
            </div>
          ))}
          {productFilter.length > 0 && productFilter?.map((product) => (
            <div className='w-[350px]' key={product.id}>
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
