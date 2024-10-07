import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { cepState, ICepDate } from "../interfaces/ICep";
import { cepService } from "../services/CepService";

export function useCepCalculator() {
  const [cepResults, setCepResults] = useState<cepState[]>([]);

  const { mutateAsync, data, isPending } = useMutation({
    mutationFn: async (cepData: ICepDate) => {
      return cepService.cepCalculator(cepData);
    },
  });

  useEffect(() => {
    if (data) {
      const filteredCep = data
        .filter((result) => result.name === "SEDEX")
        .map((result) => ({
          name: result.name,
          price: result.price || "",
          deliveryTime: result.delivery_range || { min: 0, max: 0 },
        }));

      setCepResults(filteredCep);
    }
  }, [data]);

  const calculateCep = useCallback(async (fromCep: string, toCep: string, quantity: number) => {
    const cepData: ICepDate = { fromCep, toCep, quantity };
    await mutateAsync(cepData);
  }, [mutateAsync]);

  return {
    cepResults,
    isPending,
    calculateCep,
  };
}
