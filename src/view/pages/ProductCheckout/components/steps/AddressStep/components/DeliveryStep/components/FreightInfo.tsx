import { formatCurrency } from "../../../../../../../../../app/utils/formatCurrency";

interface FreightInfoProps {
  name: string;
  price: string;
  deliveryTime: {
    min: number;
    max: number;
  };
}

export function FreightInfo({ name, price, deliveryTime }: FreightInfoProps) {
  return (
    <div className="mt-10 border border-black p-4 flex items-center gap-4">
      <input
        id={`bordered-radio-${name}`}
        type="radio"
        value={price}
        checked
        readOnly
        name="shippingOption"
        className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-1">
          <span className="w-full text-sm font-medium text-zinc-700/70">
            {name} -
          </span>
          <span className="text-sm font-semibold">
            {formatCurrency(Number(price))}
          </span>
        </div>
        <span className="text-xs mt-1 text-zinc-700/80">
          Previsão: {deliveryTime.max} dias úteis
        </span>
      </div>
    </div>
  );
}
