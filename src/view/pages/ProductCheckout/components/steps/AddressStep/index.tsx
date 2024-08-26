import { TotalCart } from "../CartStep/TotalCart";
import { DeliveryStep } from "./components/DeliveryStep";
import { EmailStep } from "./components/EmailStep";
import { PersonalData } from "./components/PersonalData";
import { StepperAddress } from "./components/StepperAddress";

export function AddressStep() {
  return (
    <section className=" flex justify-center gap-14 w-full">
      <div className="flex w-full gap-24 justify-center flex-col lg2:gap-10 lg2:flex-row">
        <div className="flex gap-16 max-w-[600px] w-full ">
          <StepperAddress
            initialStep={0}
            steps={[
              {
                label: "E-mail",
                content: <EmailStep />,
              },
              {
                label: "Dados pessoais",
                content: <PersonalData />,
              },
              {
                label: "Entrega",
                content: <DeliveryStep />,
              },
              {
                label: "Pagamento",
              },
            ]}
          />
        </div>

        <div className="w-full max-w-[500px]">
          <TotalCart />
        </div>
      </div>
    </section>
  );
}
