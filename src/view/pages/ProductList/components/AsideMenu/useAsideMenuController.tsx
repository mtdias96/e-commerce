import { useState } from "react";

export function useAsideMenuController() {
  const [valueSelected, setValueSelected] = useState([])

  function filterSelected(value: string) {
    console.log(value);
  }


  return { filterSelected }

}
