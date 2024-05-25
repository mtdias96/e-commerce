import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup";

// const passwordSchema = z.string()
//   .min(8, "Senha deve conter pelo menos 8 caracteres")
//   .refine(value => /[A-Z]/.test(value), "Senha deve conter pelo menos uma letra maiúscula")
//   .refine(value => /[a-z]/.test(value), "Senha deve conter pelo menos uma letra minúscula")
//   .refine(value => /[0-9]/.test(value), "Senha deve conter pelo menos um número")
//   .refine(value => /[^a-zA-Z0-9]/.test(value), "Senha deve conter pelo menos um caractere especial");

const user = z.object({
  fullname: z.string().min(3, 'Nome é obrigatório'),
  email: z.string().min(3, "E-mail é obrigatório").email(),
  password: z.string().min(8, "Senha deve conter pelo menos 8 caracteres")
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

 const {mutateAsync, isLoading} = useMutation({
  mutationFn: async (data: SignupParams) => {
    return authService.signup(data)
  },
 })

  const handleSubmit = hookFormSubmit(async (data) => {
    try{
      const {accessToken} = await mutateAsync(data)
      console.log({accessToken});
    }catch{
      toast.error("Ocorreu um erro ao criar sua conta!")
    }
  })

  return {handleSubmit, register, errors, isLoading}
 }
