import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { SigninParams } from "../../../app/services/authService/signin";

const user = z.object({
  email: z.string().min(3, "E-mail é obrigatório").email(),
  password: z.string().min(8, "Senha deve conter pelo menos 8 digitos")
})

type FormData = z.infer<typeof user>

export function useLoginController(){
 const {
  handleSubmit: hookFormSubmit,
  register,
  formState: {errors}
} = useForm<FormData>({
  resolver: zodResolver(user),
})

const {mutateAsync, isLoading} = useMutation({
  mutationFn: async (data: SigninParams) => {
    return authService.signin(data)
  },
 })

  const handleSubmit = hookFormSubmit(async (data) => {
    try{
      const {accessToken} = await mutateAsync(data)
      console.log({accessToken});
    }catch{
      toast.error("Credenciais inválidas")
    }
  })
  console.log(isLoading);
 return {handleSubmit, register, errors, isLoading}
}
