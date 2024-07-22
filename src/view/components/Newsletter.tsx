import { Button } from "./Button";
import { Input } from "./Input";

export function Newsletter() {
  return (
    <section className="w-full h-56 md:h-40 bg-gray-100 flex items-center justify-center md:justify-evenly flex-col gap-2 mb-16 md:flex-row ">
      <div className="flex flex-col flex-wrap">
        <h2 className="text-base italic md:text-lg">Receba ofertas e cupons em primeira mão.</h2>
        <p className="font-bold text-center md:text-left  md:text-lg italic">Quer saber das novidades no NEWBOOT</p>
      </div>
      <div>
        <form className="flex flex-col md:flex-row gap-2 px-4 mt-2 items-center">
          <div className="flex">
            <Input
              name="name"
              type="text"
              placeholder="Nome"
              className="
              placeholder:text-xs focus:border-gray-600
              rounded-none
              lg:w-96
              border-gray-300"
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              className="placeholder:text-xs
              focus:border-gray-600
              rounded-none
              lg:w-96
              border-gray-300"
            />
          </div>
          <Button
            className="rounded-none bg-black/70 h-10 hover:bg-black/60 w-full md:h-[52px] md:w-52  "
          >Cadastrar</Button>
        </form>
      </div>
    </section>
  )
}
