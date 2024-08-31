import { useContext } from "react";
import { StepperCartContext } from ".";

export function useStepperCart() {
  return useContext(StepperCartContext);
}
