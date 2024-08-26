import { InputStep } from "../InputStep";
import { useDeliveryController } from "./useDeliveryController";

export function DeliveryStep() {
  const { register } = useDeliveryController();
  return (
    <form action="" className="flex flex-col gap-8 w-full">
      <div className="w-full flex flex-col gap-4">
        <InputStep label="CEP" {...register("cep")} className="h-10 w-full " />

        <InputStep
          label="endereço"
          {...register("address")}
          className="h-10 w-full "
        />

        <InputStep
          label="número"
          {...register("number")}
          className="h-10 w-full "
        />

        <InputStep
          label="complemento e referência"
          {...register("complement")}
          className="h-10 w-full "
        />

        <InputStep
          label="bairro"
          {...register("zone")}
          className="h-10 w-full "
        />

        <InputStep
          label="estado"
          {...register("state")}
          className="h-10 w-full "
        />
        <InputStep
          label="destinatário"
          {...register("recipient")}
          className="h-10 w-full "
        />
      </div>
    </form>
  );
}
