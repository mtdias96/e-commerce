import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Register() {
  return (
    <>
      <header className=" flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-blue-950 tracking-[0.5px]">Bem vindo ao E-com</h1>

        <span className="text-gray-500 text-base tracking-[0.5px]">Faça login para continuar</span>
      </header>

      <form className="mt-16 flex flex-col gap-2 w-full ">
        <Input
          type="text"
          placeholder="Nome Completo"
          name="name"
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
        />
        <Button type="submit">Entrar</Button>
      </form>
    </>
  )
}
