import { FiTrash } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useFilter } from "../../../../../../app/hooks/useFilter";
export default function TagFilter() {
  const { handleTagRemove, tagFilter } = useFilter()

  return (
    <>
      {
        tagFilter.length > 0 && <div className=" py-5 border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Filtros atuais</h3>
            <div className="flex items-center gap-1 text-zinc-400 text-xs font-bold">
              <FiTrash className="text-zinc-500" />
              <button className="underline uppercase border-b ">Limpar filtros</button>
            </div>
          </div>

          <div className="w-full flex flex-wrap gap-2">
            {tagFilter.map(tag => (
              <div
                key={tag}
                className="border border-zinc-800 flex items-center justify-center p-1 px-2 gap-1 cursor-pointer transition-all"
                onClick={() =>
                  handleTagRemove(tag)}
              >
                <span className="text-sm tracking-[0.5px] ">{tag}</span>
                <RiCloseLargeLine
                  className="w-3.5 h-3.5 text-black"
                />
              </div>
            ))}
          </div>
        </div>
      }

    </>

  )
}
