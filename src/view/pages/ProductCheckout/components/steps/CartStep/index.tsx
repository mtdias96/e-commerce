import { useMediaQuery } from "react-responsive";
import { useCart } from "../../../../../../app/hooks/useCart";
import { CartCardStep } from "./CartCardStep";

export function CartStep() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const { productCart } = useCart();

  return (
    <div className="mx-8">
      <h2 className="font-bold text-2xl ">Seu carrinho</h2>

      <section className="mt-6">
        <div className="flex justify-between items-center w-full">
          <span className="text-zinc-500 text-sm flex-1">Produtos</span>

          {isDesktop && (
            <div className="flex justify-between w-96 gap-4">
              <span className="text-zinc-500 text-sm text-center flex-1">
                Preço Unid.
              </span>
              <span className="text-zinc-500 text-sm text-center flex-1">
                Qtd.
              </span>
              <span className="text-zinc-500 text-sm text-center flex-1">
                Total
              </span>
            </div>
          )}
        </div>

        {productCart.map(({ image, name, price, id, size, quantity }) => (
          <div key={id} className="  border-b  border-zinc-200 py-6 mt-4">
            <CartCardStep
              image={image[0]}
              name={name}
              price={price}
              size={size}
              quantity={quantity}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
