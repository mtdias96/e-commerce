import { TotalCart } from "../CartStep/TotalCart";
import { EmailStep } from "./components/EmailStep";
import { PersonalData } from "./components/PersonalData";
import { StepperAddress } from "./components/StepperAddress";

export function AddressStep() {
  return (
    <section className=" flex flex-col lg:flex-row justify-center  gap-14 ">
      <div className="flex max-w-[700px] gap-16">
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
            },
            {
              label: "Pagamento",
            },
          ]}
        />
      </div>
      <div className="max-w-[500px] lg:w-[600px]">
        <TotalCart />
      </div>
    </section>
  );
}
