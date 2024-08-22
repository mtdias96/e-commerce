import { IoIosCheckmark } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { Button } from "../../../../../components/Button";
import { TotalCart } from "../CartStep/TotalCart";

export function AddressStep() {
  return (
    <form className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 mt-10">
      <div className="flex flex-col gap-8 w-full lg:w-[600px]">
        <h3 className="font-bold text-2xl flex gap-4 items-start tracking-[-1px]">
          <span className="text-red-600 inline-block text-xl font-black">
            1
          </span>
          E-mail
        </h3>

        <div>
          <div>
            <label className="uppercase text-xs text-zinc-500">
              digite seu email
            </label>
            <input
              name="email"
              className="border-red-900 w-full h-12 border px-3.5"
              placeholder="seu@email.com"
            />
          </div>

          <div className="bg-orange-500/10 p-4 mt-4 rounded-lg border-transparent">
            <h3 className="flex items-center gap-6 font-bold text-sm">
              <MdLockOutline className="w-6 h-6 " />
              Usamos seu e-mail de forma 100% segura para:
            </h3>

            <ul className="mx-8 mt-2 text-sm flex-1 flex flex-col items-start justify-center">
              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700" />
                Identificar seu perfil
              </li>

              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700" />
                Notificar sobre o andamento do seu pedido
              </li>

              <li className="flex items-center">
                <IoIosCheckmark className="w-6 h-6 text-orange-700" />
                Gerenciar seu historico de compras
              </li>

              <li className="flex items-center ">
                <IoIosCheckmark className="w-6 h-6 text-orange-700" />
                Acelerar o preenchimento da suas informações
              </li>
            </ul>
          </div>

          <Button className="mt-4 bg-orange-700 rounded-none">Continuar</Button>
        </div>
      </div>

      <div className="w-full lg:w-[500px]">
        <TotalCart />
      </div>
    </form>
  );
}
