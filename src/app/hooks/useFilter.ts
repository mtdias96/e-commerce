import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";


export function useFilter(){
  return useContext(FilterContext)
}
