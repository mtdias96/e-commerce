import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useCepCalculator } from "../../../../../../../../app/hooks/useCepCalculator";
import { cepAddress } from "../../../../../../../../app/services/CepService/cepAddress";
import { sleep } from "../../../../../../../../app/utils/sleep";
import { UseToggleCartMenu } from "../../../../../../../components/Menu/ToggleCartMenu/useToggleCartMenu";
import { useStepper } from "../StepperAddress/useStepperAddress";

interface IPersonalData {
  cep: string;
  address: string;
  number: string;
  complement: string;
  zone: string;
  city: string;
  state: string;
  recipient: string;
  name: string;
}

export function useDeliveryController() {
  const [addressData, setAddressData] = useState<Partial<IPersonalData>>({});
  const {
    register,
    handleSubmit: submit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IPersonalData>({ shouldFocusError: true, mode: "onChange" });
  const { cepResults, calculateCep } = useCepCalculator();
  const { productCart } = UseToggleCartMenu();

  const { nextStep } = useStepper();

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: async (data: string) => {
      await sleep(1000);
      return cepAddress(data);
    },
  });

  const handleCepSubmit = (cep: string) => {
    calculateCep("11015230", cep, productCart.length);
  };


  const handleSubmit = submit(
    async (data) => {
      try {
        const { bairro, logradouro, localidade, uf } = await mutateAsync(data.cep);
        setValue('address', logradouro);
        setValue('zone', bairro);
        setValue('city', localidade);
        setValue('state', uf);

        setAddressData({
          address: logradouro,
          zone: bairro,
          city: localidade,
          state: uf,
        });

        handleCepSubmit(data.cep)
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    },
    (errors) => {
      console.log({ errors });
    }
  );

  return {
    handleSubmit,
    errors,
    isSubmitting,
    register,
    nextStep,
    isPending,
    isSuccess,
    addressData,
    cepResults
  };
}
