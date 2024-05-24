import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const user = z.object({
  name: z.string().min(3, 'Nome é obrigatório'),
  email: z.string().min(3, "E-mail é obrigatório").email(),
  password: z.string().min(8, "Senha deve conter pelo menos 8 digitos")
})

type FormData = z.infer<typeof user>

export function useRegisterController(){
  const {
   handleSubmit: hookFormSubmit,
   register,
   formState: {errors}
 } = useForm<FormData>({
   resolver: zodResolver(user),
 })

  const handleSubmit = hookFormSubmit((data) => {
   console.log("Chama api", data);
  })
  console.log(errors);
  return {handleSubmit, register, errors}
 }
