import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const {errors, handleSubmit, register, isLoading} = useRegisterController()
  return (
    <div className="">
      <header className=" mt-20 flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-blue-950 tracking-[0.5px]">AINDA NÃO TEM ACESSO?</h1>

        <span className="text-gray-500 text-base tracking-[0.5px]">CADASTRE-SE EM NOSSA LOJA</span>
      </header>

      <form
      onSubmit={handleSubmit}
      className="mt-16 flex flex-col gap-2 w-full ">
        <Input
          type="text"
          placeholder="Nome Completo"
          error={errors.fullname?.message}
          {...register("fullname")}
        />
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" disabled={isLoading} className="mt-4">Entrar</Button>
      </form>

      <p className="mt-6 text-right">
          <span className="font-bold text-gray-500 leading-[18px]
          tracking-wide-[0.5px] mx-1">Já possui uma conta?</span>
          <Link to='/entrar' className=" font-bold text-blue-300 leading-[18px]
          tracking-wide-[0.5px] hover:opacity-75">Entrar</Link>
        </p>

    </div>
  )
}
