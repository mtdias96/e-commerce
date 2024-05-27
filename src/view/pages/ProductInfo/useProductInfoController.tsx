import { useState } from "react";
import image2 from '../../../assets/images/products/airmax/1.png';
import image3 from '../../../assets/images/products/airmax/2.png';
import image4 from '../../../assets/images/products/airmax/3.png';
import image1 from '../../../assets/images/products/airmax/5.png';

export function useProductInfoController(){
  const [quantity, setQuantity] = useState(1)

  function handlePus(){
    setQuantity((prevState: number) => prevState + 1 )
  }

  function handleMinus() {
    setQuantity((prevState: number) => {
      return prevState > 1 ? prevState - 1 : prevState;
    });
  }

  const productId = {
    image: [image2, image3, image4, image1],
    name: "Nike Airmax 280",
    price: 120,
    description: "This is a brief description of the product. Highlight the key features and benefits here."
  };

 return {handleMinus, handlePus, quantity, productId}
}
