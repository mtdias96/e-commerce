// import { Button } from "../../components/Button";
// import { Input } from "../../components/Input";
// import Menu from "../../components/Menu";
// import { useAddProduct } from "./useAddProduct";

// export function AddProduct() {
//   const { register, handleSubmit, errors } = useAddProduct();
//   const variationsSize = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46']
//   return (
//     <>
//       <Menu />
//       <div className="mt-32 mx-8 flex flex-col justify-center items-center">
//         <h3 className="text-center">Adicionar produto na lista</h3>

//         <form
//           onSubmit={handleSubmit}
//           className="mt-4 flex flex-col gap-2 w-[400px] ">
//           <Input
//             type="text"
//             placeholder="Nome do produto"
//             error={errors.name?.message}
//             {...register("name")}
//           />
//           <Input
//             type="number"
//             placeholder="Preço"
//             error={errors.price?.message}
//             {...register("price", { valueAsNumber: true })}
//           />
//           <Input
//             type="text"
//             placeholder="Cor"
//             error={errors.color?.message}
//             {...register("color")}
//           />
//           <Input
//             type="textarea"
//             placeholder="Descrição"
//             error={errors.description?.message}
//             {...register("description")}
//           />
//           <Input
//             type="text"
//             placeholder="Gênero"
//             error={errors.gender?.message}
//             {...register("gender")}
//           />
//           <Input
//             type="number"
//             placeholder="Categoria ID"
//             error={errors.categoryId?.message}
//             {...register("categoryId", { valueAsNumber: true })}
//           />
//           <Input
//             type="text"
//             placeholder="Marca"
//             error={errors.brand?.message}
//             {...register("brand")}
//           />
//           <Input
//             type="text"
//             placeholder="Imagens (separadas por vírgulas)"
//             error={errors.image?.message}
//             {...register("image", {
//               setValueAs: v => v.split(',').map(Number)
//             })}
//           />
//           <div className="mt-4">
//             <h4 className="mb-2">Variações</h4>
//             {variationsSize.map((numb, index) => (
//               <div key={index} className="flex gap-2 mb-2">
//                 <Input
//                   type="text"
//                   placeholder={`Tamanho ${numb}`}
//                   error={errors.variations?.message}
//                   {...register(numb)}
//                 />
//                 <Input
//                   type="number"
//                   placeholder={`Quantidade ${index + 1}`}
//                   error={errors.variations?.message}
//                   {...register(`variations.${index}.quantity` as const, { valueAsNumber: true })}
//                 />
//               </div>
//             ))}
//           </div>
//           <Button type="submit" className="mt-4 mb-4 hover:opacity-90">Adicionar Produto</Button>
//         </form>
//       </div>
//     </>
//   );
// }

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Menu from "../../components/Menu";
import { useAddProduct } from "./useAddProduct";

export function AddProduct() {
  const { register, handleSubmit, errors, onSubmit } = useAddProduct();
  const variationsSize = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];

  return (
    <>
      <Menu />
      <div className="mt-32 mx-8 flex flex-col justify-center items-center">
        <h3 className="text-center">Adicionar produto na lista</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-2 w-[400px]">
          <Input
            type="text"
            placeholder="Nome do produto"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            type="number"
            placeholder="Preço"
            error={errors.price?.message}
            {...register("price", { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Cor"
            error={errors.color?.message}
            {...register("color")}
          />
          <Input
            type="textarea"
            placeholder="Descrição"
            error={errors.description?.message}
            {...register("description")}
          />
          <Input
            type="text"
            placeholder="Gênero"
            error={errors.gender?.message}
            {...register("gender")}
          />
          <Input
            type="number"
            placeholder="Categoria ID"
            error={errors.categoryId?.message}
            {...register("categoryId", { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Marca"
            error={errors.brand?.message}
            {...register("brand")}
          />
          <Input
            type="text"
            placeholder="Imagens (separadas por vírgulas)"
            error={errors.image?.message}
            {...register("image", {
              setValueAs: v => v.split(',').map(Number)
            })}
          />
          <div className="mt-4">
            <h4 className="mb-2">Variações</h4>
            {variationsSize.map((size, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  type="text"
                  placeholder={`Tamanho ${size}`}
                  error={errors.variations?.[index]?.size?.message}
                  {...register(`variations.${index}.size` as const)}
                />
                <Input
                  type="number"
                  placeholder={`Quantidade ${index + 1}`}
                  error={errors.variations?.[index]?.quantity?.message}
                  {...register(`variations.${index}.quantity` as const, { valueAsNumber: true })}
                />
              </div>
            ))}
          </div>
          <Button type="submit" className="mt-4 mb-4 hover:opacity-90">Adicionar Produto</Button>
        </form>
      </div>
    </>
  );
}
