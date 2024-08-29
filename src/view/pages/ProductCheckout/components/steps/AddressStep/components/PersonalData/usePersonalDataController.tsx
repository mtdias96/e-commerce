import { useForm } from "react-hook-form";
import { sleep } from "../../../../../../../../app/utils/sleep";
import { useStepper } from "../StepperAddress/useStepperAddress";

interface IPersonalData {
  email: string;
  firstname: string;
  lastName: string;
  cpf: string;
  phone: string;
}

export function usePersonalDataController() {
  const {
    register,
    handleSubmit: submit,
    formState: { errors, isSubmitting },
  } = useForm<IPersonalData>({ shouldFocusError: true, mode: "onChange" });

  const { nextStep, getPersonalDataSelected } = useStepper();

  const handleSubmit = submit(
    async (data) => {
      await sleep(1000);

      getPersonalDataSelected(
        data.firstname + " " + data.lastName,
        data.phone,
        data.email
      );

      nextStep();
    },
    (errors) => {
      console.log({ errors });
    }
  );

  return { handleSubmit, errors, isSubmitting, register, nextStep };
}
