import { useForm } from "react-hook-form";
import { sleep } from "../../../../../../../app/utils/sleep";

interface IEmailData {
  email: string;
}

export function useEmailStepController(){
  const {
    register,
    handleSubmit: submit,
    formState: { errors, isSubmitted },
  } = useForm<IEmailData>({ shouldFocusError: true, mode: "onChange", });

  const handleSubmit = submit(
    async (data) => {
      await sleep(1000);

      console.log({ data });
    },
    (errors) => {
      console.log({ errors });
    }
  );


  return {handleSubmit, errors, isSubmitted, register}
}
