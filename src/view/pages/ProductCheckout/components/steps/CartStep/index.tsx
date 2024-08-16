import { CartCardStep } from "./CartCardStep";

export function CartStep() {
  return (
    <div className="">
      <h2 className="font-bold text-2xl">Seu carrinho</h2>

      <section className="mt-6">
        <span className="text-zinc-500 text-sm">Produtos</span>
        <CartCardStep />
      </section>
    </div>
  );
}
