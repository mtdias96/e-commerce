import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { productService } from "../../../app/services/productService";

const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  price: z.number().positive("Preço deve ser positivo"),
  color: z.string().min(1, "Cor é obrigatória"),
  description: z.string().min(1, "Descrição é obrigatória"),
  image: z.array(z.number()).nonempty("Pelo menos uma imagem é necessária"),
  gender: z.string().min(1, "Gênero é obrigatório"),
  categoryId: z.number().min(1, "Categoria ID é obrigatório"),
  brand: z.string().min(3, "Marca deve ter pelo menos 3 caracteres"),
  variations: z.array(
    z.object({
      size: z.string(),
      quantity: z.number().nonnegative("Quantidade deve ser não negativa")
    })
  ).nonempty("Pelo menos uma variação é necessária")
});

type ProductData = z.infer<typeof productSchema>;

interface ICreateVariation {
  size: string;
  quantity: number;
}

export interface ICreateProduct {
  name: string;
  price: number;
  color: string;
  description: string;
  image: number[];
  gender: string;
  categoryId: number;
  brand: string;
  variations: ICreateVariation[];
}

export function useAddProduct() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors }
  } = useForm<ProductData>({
    resolver: zodResolver(productSchema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (product: ICreateProduct) => {
      return productService.useCreateProduct(product);
    },
  });

  const onSubmit = async (product: ProductData) => {
    try {
      await mutateAsync(product);
      toast.success('Produto cadastrado com sucesso!');
    } catch (error) {
      toast.error('Erro ao cadastrar produto');
    }
  };

  return { handleSubmit: hookFormSubmit, register, errors, onSubmit };
}
