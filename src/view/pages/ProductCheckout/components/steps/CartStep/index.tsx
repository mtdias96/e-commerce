import { useMediaQuery } from "react-responsive";
import { useCart } from "../../../../../../app/hooks/useCart";
import { useStepperCart } from "../../Stepper/useStepperCart";
import { CartCardStep } from "./CartCardStep";
import { TotalCart } from "./TotalCart";

export function CartStep() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const { nextStep } = useStepperCart();
  const { productCart, handleremoveProductList } = useCart();

  return (
    <div className=" flex lg:gap-14 flex-col lg:flex-row justify-center w-full ">
      {productCart.length > 0 ? (
        <>
          <section className="mt-6">
            <h2 className="font-bold text-2xl ">Seu carrinho</h2>
            <div className="flex justify-between items-center w-full mt-8 ">
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

            {productCart.map(({ image, name, price, id, size }) => (
              <div key={id} className="  border-b  border-zinc-200 py-6 mt-4">
                <CartCardStep
                  image={image[0]}
                  name={name}
                  price={price}
                  size={size}
                  id={id || ""}
                  handleremoveProductList={handleremoveProductList}
                />
              </div>
            ))}
          </section>

          <section className=" mt-10 w-full lg:w-[500px] pb-10 flex justify-center items-end">
            <TotalCart nextStep={nextStep} />
          </section>
        </>
      ) : (
        <div>
          <h2>Nenhum produto no carrinho</h2>
        </div>
      )}
    </div>
  );
}
