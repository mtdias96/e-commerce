import { useForm } from "react-hook-form";
import { sleep } from "../../../../../../../../app/utils/sleep";
import { useStepper } from "../StepperAddress/useStepperAddress";

export function useDeliveryController(){

interface IPersonalData {
  cep: string;
  address: string;
  number: string;
  complement: string;
  zone: string;
  city: string;
  state: string;
  recipient: string;
}

  const {
    register,
    handleSubmit: submit,
    formState: { errors, isSubmitting },
  } = useForm<IPersonalData>({ shouldFocusError: true, mode: "onChange" });

  const { nextStep } = useStepper();

  const handleSubmit = submit(
    async (data) => {
      await sleep(1000);
      console.log({data});
      nextStep();
    },
    (errors) => {
      console.log({ errors });
    }
  );

  return { handleSubmit, errors, isSubmitting, register, nextStep };
}

