import { InputStep } from "../InputStep";
import { StepperNextStepButton } from "../StepperAddress";
import { TermsUse } from "./components/TermsUse";
import { usePersonalDataController } from "./usePersonalDataController";

export function PersonalData() {
  const { register, errors, handleSubmit } = usePersonalDataController();

  return (
    <form className="flex flex-col gap-8 max-w-[550px]" onSubmit={handleSubmit}>
      <p className="text-sm tracking-[1px] text-zinc-700">
        Solicitamos apenas informações essenciais para realização da compra
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center lg2:flex-row lg2:gap-5 w-full">
          <InputStep
            type="email"
            label="E-mail"
            placeholder="seu@email.com"
            className="text-xs h-10  w-full"
            {...register("email", {
              required: "Campo obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Informe um email válido.",
              },
            })}
            error={errors.email?.message}
          />

          <InputStep
            type="text"
            label="Primeiro nome"
            placeholder="Nome"
            className="text-xs h-10  w-full"
            {...register("firstname", {
              required: "Campo obrigatório.",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Informe um nome válido.",
              },
            })}
            error={errors.firstname?.message}
          />
        </div>

        <div className="flex flex-col gap-4 lg2:flex-row lg2:gap-0">
          <InputStep
            type="text"
            label="Último nome"
            placeholder="Sobrenome"
            className="text-xs h-10 w-full"
            {...register("lastName", {
              required: "Campo obrigatório.",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Informe um sobrenome válido.",
              },
            })}
            error={errors.lastName?.message}
          />

          <InputStep
            type="text"
            label="CPF"
            placeholder="999.999.999-99"
            className="text-xs h-10 w-full"
            {...register("cpf", {
              required: "Campo obrigatório.",
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "Informe um CPF válido.",
              },
            })}
            error={errors.cpf?.message}
          />
        </div>

        <InputStep
          type="text"
          label="Telefone"
          placeholder="13 99999-99999"
          className="text-xs h-10  w-full"
          {...register("phone", {
            required: "Campo obrigatório.",
            pattern: {
              value: /^\d{2} \d{5}-\d{4}$/,
              message: "Informe um telefone válido.",
            },
          })}
          error={errors.phone?.message}
        />
      </div>

      <div className="mt-2">
        <TermsUse />
      </div>

      <StepperNextStepButton className="mt-4 h-10 mb-8 bg-orange-700 rounded-none uppercase">
        ir para entrega
      </StepperNextStepButton>
    </form>
  );
}
