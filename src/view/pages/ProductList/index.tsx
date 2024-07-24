import { useEffect, useState } from "react";
import { useFilter } from "../../../app/hooks/useFilter";
import { CardProduct } from "../../components/CardProduct";
import Menu from "../../components/Menu";
import { SkeletonCard } from "../../components/SkeletonCard";
import { AsideMenu } from "./components/AsideMenu";
import { useProductListController } from "./useProductListController";

export function ProductList() {
  const { products, isPending } = useProductListController();
  const { productFilter } = useFilter();
  const [quantity, setQuantity] = useState(0)
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8]


  useEffect(() => {
    if (productFilter.length > 0) {
      setQuantity(productFilter.length);
    } else {
      setQuantity(products?.length ?? 0);
    }
  }, [products, productFilter]);


  return (
    <div className='relative pt-16 md:pt-28'>
      <Menu />
      <AsideMenu productQuantity={quantity} />
      <section className="w-full flex mt-8">
        <div className="flex flex-wrap justify-center w-40 gap-12 flex-grow px-8 flex-1">
          {!isPending && productFilter.length <= 0 && products?.map((product) => (
            <div className='w-[300px]' key={product.id}>
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
            </div>
          ))}
          {productFilter.length > 0 && productFilter?.map((product) => (
            <div className='w-[350px]' key={product.id}>
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
            </div>
          ))}

          {isPending && skeletonCards.map((product) => (
            <div className='w-[350px]' key={product}>
              <SkeletonCard />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
