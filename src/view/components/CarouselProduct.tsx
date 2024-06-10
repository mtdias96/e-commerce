// import Slider, { Settings } from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';

// import { useEffect, useState } from 'react';
// import { IProduct } from '../../app/context/CartContext';
// import { useProducts } from '../../app/services/productService/getProduct';
// import Banner from './Banner';
// import { CardProduct } from './CardProduct';


// export function CarouselProduct() {
//   const { data: products } = useProducts();
//   const [newCollection, setNewCollection] = useState<IProduct[]>([]);


//   useEffect(() => {
//     if (products) {
//       setNewCollection(products.slice(0, 8));
//     }
//   }, [products]);

//   const settings: Settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="mt-10 w-full">
//         <Slider {...settings}>
//           {newCollection.map((product) => (
//             <div key={product.name} className="slide-item p-1">
//               <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className='w-full flex justify-center gap-5'>
//         <button
//         > ----seta </button>
//         <button> seta---- </button>
//       </div>
//     </>
//   );
// }

// export default Banner;



import { useEffect, useRef, useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { IProduct } from '../../app/context/CartContext';
import { useProducts } from '../../app/services/productService/getProduct';
import { CardProduct } from './CardProduct';

export function CarouselProduct() {
  const { data: products } = useProducts();
  const [newCollection, setNewCollection] = useState<IProduct[]>([]);
  const sliderRef = useRef<Slider>(null); // Referência para o componente Slider

  useEffect(() => {
    if (products) {
      setNewCollection(products.slice(0, 8));
    }
  }, [products]);

  const settings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <div className="mt-10 w-full">
        <Slider ref={sliderRef} {...settings}>
          {newCollection.map((product) => (
            <div key={product.name} className="slide-item p-1">
              <CardProduct image={product.image} name={product.name} price={product.price} id={product.id} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full flex justify-center gap-5'>
        <button onClick={prevSlide}>
          <MdOutlineKeyboardArrowLeft className='w-8 h-8' />
        </button>
        <button onClick={nextSlide}>
          <MdOutlineKeyboardArrowRight className='w-8 h-8' />
        </button>
      </div>
    </>
  );
}

export default CarouselProduct;
