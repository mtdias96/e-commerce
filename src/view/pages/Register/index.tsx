import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const {errors, handleSubmit, register} = useRegisterController()
  return (
    <>
      <header className=" flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-blue-950 tracking-[0.5px]">Vamos começar?</h1>

        <span className="text-gray-500 text-base tracking-[0.5px]">Crie uma nova conta</span>
      </header>

      <form
      onSubmit={handleSubmit}
      className="mt-16 flex flex-col gap-2 w-full ">
        <Input
          type="text"
          placeholder="Nome Completo"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button type="submit">Entrar</Button>
      </form>

      <p className="mt-6 text-right">
          <span className="font-bold text-gray-500 leading-[18px]
          tracking-wide-[0.5px] mx-1">Já tem uma conta?</span>
          <Link to='/entrar' className=" font-bold text-blue-300 leading-[18px]
          tracking-wide-[0.5px] hover:opacity-75">Entrar</Link>
        </p>
    </>
  )
}
