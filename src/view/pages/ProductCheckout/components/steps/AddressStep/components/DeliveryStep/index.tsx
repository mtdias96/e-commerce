import { IoIosArrowForward } from "react-icons/io";
import { InputStep } from "../InputStep";
import { useDeliveryController } from "./useDeliveryController";

export function DeliveryStep() {
  const { register, handleSubmit } = useDeliveryController();
  return (
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
  );
}
