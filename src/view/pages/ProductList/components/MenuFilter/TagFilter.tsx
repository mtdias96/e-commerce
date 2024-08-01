import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
export default function TagFilter() {
  const [tags, settags] = useState(['Addidas', '48', 'Vermelho', 'Masculino', 'Amarelo', '45', 'Preto', 'Vinho', 'Obay', 'R$100 - R$300', 'R$300 - R$600'])

  function filtredRemove(name: string) {
    settags(tags.filter(tag => tag !== name))
  }

  return (
    <div className="mb-6 py-3 border-b border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Filtros atuais</h3>
        <div className="flex items-center gap-1 text-zinc-400 text-xs font-bold">
          <FiTrash className="text-zinc-500" />
          <button className="underline uppercase border-b ">Limpar filtros</button>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-2">
        {tags.map(tag => (
          <div
            key={tag}
            className="border border-zinc-800 flex items-center justify-center p-1 px-2 gap-1 cursor-pointer transition-all"
            onClick={() => filtredRemove(tag)}
          >
            <span className="text-sm ">{tag}</span>
            <RiCloseLargeLine
              className="w-3.5 h-3.5 text-black"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
