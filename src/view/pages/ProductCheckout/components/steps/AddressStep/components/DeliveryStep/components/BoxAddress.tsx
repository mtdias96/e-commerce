interface BoxProps {
  addess?: string;
  zone?: string;
  city?: string;
  state?: string;
  isOpen: () => void;
}

export function BoxAdress({ addess, city, state, zone, isOpen }: BoxProps) {
  return (
    <div className="w-full p-4 h-24 border mt-8 text-sm">
      <div className="flex justify-between mb-0.5">
        <h2 className="font-bold tracking-[0.5px] flex">Endereço de Entrega</h2>
        <button
          onClick={isOpen}
          className="uppercase font-bold text-xs border-b border-black"
        >
          Editar
        </button>
      </div>
      <h3 className="text-gray-700">{addess}</h3>
      <span className="text-gray-700">
        {zone} - {city} - {state}
      </span>
    </div>
  );
}
