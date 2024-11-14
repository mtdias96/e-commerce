import { useStore } from "../../../../../../app/store";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { Button } from "../../../../../components/Button";

interface ITotalCart {
  nextStep?: () => void;
}

/*Mover para components productcheckout*/
export function TotalCart({ nextStep }: ITotalCart) {
  const totalPrice = useStore((state) => state.cart.totalPrice);

  return (
    <section className="border px-4 py-6 w-full">
      <div className="flex flex-col gap-8">
        <h2 className="uppercase font-bold">resumo do pedido</h2>

        <div className="border-t border-b py-4">
          <span className="font-bold inline-block">Desconto</span>
          <div className="relative w-full mt-2">
            <input
              name="codigo"
              placeholder="Código"
              className="border-black placeholder:text-xs bg-white w-full rounded-md border px-3 h-[48px]"
            />
            <button className="absolute top-[18px] right-2 text-zinc-400 text-xs uppercase decoration-1 h-4 flex justify-center items-center">
              aplicar
            </button>
          </div>
        </div>

        <div className="text-sm">
          <div className="flex justify-between">
            <h3>Subtotal</h3>
            <span>{formatCurrency(totalPrice)}</span>
          </div>
          <div className="flex justify-between mt-1.5">
            <h3>Entrega</h3>
            <span>Grátis</span>
          </div>
        </div>

        <div className="flex justify-between font-semibold text-black">
          <h3>Total</h3>
          <span>{formatCurrency(totalPrice)}</span>
        </div>

        <Button
          onClick={nextStep}
          className="w-full rounded-none bg-orange-700"
        >
          FINALIZAR
        </Button>
      </div>
    </section>
  );
}
