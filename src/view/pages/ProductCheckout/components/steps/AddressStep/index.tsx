import { TotalCart } from "../CartStep/TotalCart";
import { PersonalData } from "./components/PersonalData";

export function AddressStep() {
  return (
    <section className="flex justify-center gap-8  md:flex-row flex-col">
      {/* <div className="w-full lg:max-w-[900px]">
        <EmailStep />
      </div> */}
      <div className="w-full lg:max-w-[900px]">
        <PersonalData />
      </div>

      <div className="w-full lg:w-[500px]">
        <TotalCart />
      </div>
    </section>
  );
}
