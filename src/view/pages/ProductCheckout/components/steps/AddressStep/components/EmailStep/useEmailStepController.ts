import { useForm } from "react-hook-form";
import { sleep } from "../../../../../../../../app/utils/sleep";
import { useStepper } from "../StepperAddress/useStepperAddress";


interface IEmailData {
  email: string;
}

export function useEmailStepController(){
  const {
    register,
    handleSubmit: submit,
    formState: { errors, isSubmitting },
  } = useForm<IEmailData>({ shouldFocusError: true, mode: "onChange", });

  const { nextStep, getEmailSelected } = useStepper();

  const handleSubmit = submit(
    async (data) => {
      await sleep(1000);
      console.log({ data });
      getEmailSelected(data.email)
      nextStep()
    },
    (errors) => {
      console.log({ errors });
    }
  );


  return {handleSubmit, errors, isSubmitting, register}
}
