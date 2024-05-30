import { useState } from 'react';

export function useDiscount(value: number) {
  const [discountPercentage] = useState(24); // Pode ser um estado se precisar ser dinâmico
  const decimalPercentage: number = discountPercentage / 100;
  const discountedValue: number = value * (1 - decimalPercentage);

  return {
    valueDiscount: (discountedValue /6 ).toFixed(2).replace('.', ','),
    formattedValue: discountedValue.toFixed(2).replace('.', ',')
  };
}
