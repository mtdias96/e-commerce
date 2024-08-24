import { useForm } from "react-hook-form";
import { sleep } from "../../../../../../../../app/utils/sleep";

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
    formState: { errors, isSubmitted },
  } = useForm<IPersonalData>({ shouldFocusError: true, mode: "onChange" });

  const handleSubmit = submit(
    async (data) => {
      await sleep(1000);

      console.log({ data });
    },
    (errors) => {
      console.log({ errors });
    }
  );

  return { handleSubmit, errors, isSubmitted, register };
}
