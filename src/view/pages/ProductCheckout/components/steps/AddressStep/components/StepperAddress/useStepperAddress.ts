import { useContext } from "react";
import { StepperAddresContext } from ".";

export function useStepper() {
  return useContext(StepperAddresContext);
}
