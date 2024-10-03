import { IoIosArrowForward } from "react-icons/io";
import { Spinner } from "../../../../../../../components/Spinner";
import { InputStep } from "../InputStep";
import { StepperNextStepButton } from "../StepperAddress";
import { BoxAdress } from "./boxAddress";
import { useDeliveryController } from "./useDeliveryController";

export function DeliveryStep() {
  const { register, handleSubmit, isPending, isSuccess, errors, addressData } =
    useDeliveryController();

  return (
    <>
      <form onSubmit={handleSubmit} className="flex relative">
        <InputStep
          type="text"
          label="CEP"
          placeholder="0000-000"
          className="h-10"
          {...register("cep", {
            required: "Este campo é obrigatório",
            minLength: {
              value: 8,
              message: "O CEP deve ter 8 dígitos",
            },
            onChange: (e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (value.length > 8) {
                value = value.slice(0, 8);
              }

              const formattedValue =
                value.length > 4
                  ? `${value.slice(0, 4)}-${value.slice(4)}`
                  : value;
              e.target.value = formattedValue;
            },
            setValueAs: (value) => value.replace("-", ""),
          })}
        />

        <button type="submit" className="h-8 absolute right-0 bottom-1 p-2">
          <IoIosArrowForward className="hover:opacity-45" />
        </button>
      </form>

      {isPending && (
        <div className="w-full flex items-center justify-center mt-8">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {isSuccess && (
        <BoxAdress
          addess={addressData.address}
          city={addressData.city}
          zone={addressData.zone}
          state={addressData.state}
        />
      )}

      {isSuccess && (
        <div>
          <form className="w-full flex gap-2.5 flex-col uppercase space-y-3 mt-7">
            <InputStep
              className="w-full"
              label="Número"
              {...register("number", {
                required: "Campo obrigatório",
              })}
              error={errors.number?.message}
            />
            <InputStep
              className="w-full"
              label="Complemento e referência"
              placeholder="Complemento"
              {...register("complement", {
                required: "Campo obrigatório",
              })}
              error={errors.complement?.message}
            />
            <InputStep
              className="w-full"
              label="Destinatário"
              {...register("name", {
                required: "Campo obrigatório",
              })}
              error={errors.name?.message}
            />
          </form>

          <StepperNextStepButton
            className="mt-4 mb-10 h-12 bg-orange-700 uppercase w-full rounded-sm"
            type="submit"
            preventDefault
          >
            Ir para pagamento
          </StepperNextStepButton>
        </div>
      )}

      {/* {isSuccess && (
        <div>
          <form className="w-full flex flex-col uppercase space-y-3 mt-4">
            <InputStep
              className="w-full"
              label="Rua"
              {...register("address")}
              readOnly
            />
            <InputStep
              className="w-full"
              label="Número"
              placeholder="n°152"
              {...register("number")}
            />
            <InputStep
              className="w-full"
              label="bairro"
              {...register("zone")}
              readOnly
            />
            <InputStep
              className="w-full"
              label="Cidade"
              {...register("city")}
              readOnly
            />
            <InputStep
              className="w-full"
              label="estado"
              {...register("state")}
              readOnly
            />
          </form>

          <StepperNextStepButton
            className="mt-4 mb-10 h-12 bg-orange-700 uppercase w-full rounded-sm"
            type="submit"
            preventDefault
          >
            Ir para pagamento
          </StepperNextStepButton>
        </div>
      )} */}
    </>
  );
}
