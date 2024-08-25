import { IoIosCheckmark } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { InputStep } from "../InputStep";
import { StepperNextStepButton } from "../StepperAddress";
import { useEmailStepController } from "./useEmailStepController";

export function EmailStep() {
  const { errors, handleSubmit, register, isSubmitting } =
    useEmailStepController();
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col md:flex-row gap-8 lg:gap-16"
    >
      <div className="flex flex-col gap-8 w-full">
        <div>
          <InputStep
            type="email"
            label="digite seu email"
            placeholder="seu@email.com"
            className="text-xs"
            {...register("email", {
              required: "Campo obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Informe um email válido.",
              },
              validate: () => true,
            })}
            error={errors.email?.message}
          />

          <div className="bg-orange-500/5 py-4 mt-4 px-2 rounded-lg border-transparent">
            <h3 className="flex items-center gap-2 font-bold text-sm">
              <MdLockOutline className="w-6 h-6 " />
              Usamos seu e-mail de forma 100% segura para:
            </h3>

            <ul className="mx-8 mt-2 text-sm flex flex-col items-start justify-center flex-1 space-y-2">
              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700 mr-2 flex-shrink-0" />
                <span className="flex-1">Identificar seu perfil</span>
              </li>

              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700 mr-2 flex-shrink-0" />
                <span className="flex-1">
                  Notificar sobre o andamento do seu pedido
                </span>
              </li>

              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700 mr-2 flex-shrink-0" />
                <span className="flex-1">
                  Gerenciar seu histórico de compras
                </span>
              </li>

              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700 mr-2 flex-shrink-0" />
                <span className="flex-1">
                  Acelerar o preenchimento das suas informações
                </span>
              </li>
            </ul>
          </div>

          <StepperNextStepButton
            className="mt-4 mb-10 h-12 bg-orange-700 uppercase w-40 rounded-sm"
            type="submit"
            preventDefault
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Continuar
          </StepperNextStepButton>
        </div>
      </div>
    </form>
  );
}
