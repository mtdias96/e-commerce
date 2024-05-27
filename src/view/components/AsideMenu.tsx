import { useState } from "react";

export function AsideMenu() {
  const [price, setPrice] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setPrice(value);
  };

  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="bg-gray-50 flex flex-col w-full md:w-80 rounded-md p-5">
        <h2 className="text-lg font-semibold mb-2">MARCAS</h2>
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between">
            <button className="text-gray-700">Nike</button>
            <span className="text-blue-400 text-sm">15</span>
          </div>
          <div className="flex w-full justify-between">
            <button className="text-gray-700">Airmax</button>
            <span className="text-gray-700 text-sm">30</span>
          </div>
          <div className="flex w-full justify-between">
            <button className="text-gray-700">Adidas</button>
            <span className="text-gray-700 text-sm">18</span>
          </div>
          <div className="flex w-full justify-between">
            <button className="text-gray-700">Vans</button>
            <span className="text-gray-700 text-sm">16</span>
          </div>
          <div className="flex w-full justify-between">
            <button className="text-gray-700">Mizuno</button>
            <span className="text-gray-700 text-sm">11</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col w-full md:w-80 rounded-md p-5">
        <div className="flex flex-col gap-4">
          <label className="mr-2 font-semibold">R$: {price}</label>
          <input
            type="range"
            min={0}
            max={5000}
            value={price}
            onChange={handleChange}
            className="appearance-none w-full h-1 bg-gray-400 rounded-full outline-none"
          />
          <span className="ml-2"></span>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col w-full md:w-80 gap-4 rounded-md p-5">
        <h3 className="text-lg font-semibold mb-2">TAMANHO</h3>
        <div className="flex flex-wrap gap-2">
          {[34, 35, 36, 38, 39, 40, 41, 42, 43, 44].map((size) => (
            <button
              key={size}
              className="w-10 h-10 border border-gray-400 rounded flex justify-center items-center text-gray-800 hover:opacity-75 focus:border-black transition-all"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col w-full md:w-80 gap-4 rounded-md p-5">
        <h2 className="text-lg font-semibold mb-2">CORES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="w-10 h-10 bg-red-500 rounded-full"></div>
          <div className="w-10 h-10 bg-green-500 rounded-full"></div>
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
          <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
          <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
          <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
