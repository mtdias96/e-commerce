import { MdOutlineLock } from "react-icons/md";
import Footer from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Stepper } from "./components/Stepper";
import { AddressStep } from "./components/steps/AddressStep";
import { CartStep } from "./components/steps/CartStep";
import { FinishStep } from "./components/steps/FinishStep";
import { PaymentStep } from "./components/steps/PaymentStep";

export function ProductCheckout() {
  return (
    <div className="lg:mx-10">
      <header className="flex items-center justify-between gap-2 py-8 px-4 ">
        <div className="flex items-center gap-2">
          <Logo className="w-7 h-7 lg:w-9 lg:h-9" />
          <span className="font-bold text-1xl lg:text-2xl italic">NEWBOOT</span>
        </div>

        <div className="flex items-center gap-1">
          <MdOutlineLock className="w-5 h-5 text-zinc-700" />
          <span className="text-xs font-semibold text-zinc-700 tracking-[0.5px]">
            Ambiente 100% seguro
          </span>
        </div>
      </header>

      <section className="w-full bg-white min-h-screen mt-4">
        <Stepper
          initialStep={0}
          steps={[
            {
              label: "Carrinho",
              content: <CartStep />,
            },
            {
              label: "Endereço",
              content: <AddressStep />,
            },
            {
              label: "Pagamento",
              content: <PaymentStep />,
            },
            {
              label: "Finalizar",
              content: <FinishStep />,
            },
          ]}
        />
      </section>

      <Footer />
    </div>
  );
}
