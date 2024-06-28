import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonSocial } from "../../components/ButtonSocial";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";
export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController()
  return (
    <>
      <header className="mt-40 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-blue-950 tracking-[0.5px]">ACESSE SUA CONTA</h1>
      </header>

      <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-2 w-full ">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          disabled={isPending}
          isLoading={isPending}
          className="mt-2">
          Entrar
        </Button>
      </form>

      <ButtonSocial />

      <div className="flex flex-col justify-center items-center mt-6 gap-3">
        <Link to='#' className="font-bold text-blue-300 leading-[18px]
          tracking-wide-[0.5px] hover:opacity-75
        ">Esqueceu sua senha?</Link>

        <p>
          <span className="font-bold text-gray-500 leading-[18px]
          tracking-wide-[0.5px] mx-1">Não tem uma conta?</span>
          <Link to='/cadastrar' className=" font-bold text-blue-300 leading-[18px]
          tracking-wide-[0.5px] hover:opacity-75">Cadastre-se</Link>
        </p>
      </div>

    </>
  )
}
