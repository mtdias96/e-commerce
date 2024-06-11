
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import image1 from './homebanner/home-acessorios-19-02.webp';
import image2 from './homebanner/home-tenis-19-02.webp';
import image3 from './homebanner/image.png';
import image4 from './homebanner/superstar-desk.webp';




export function GalleryNav() {
  const isMobile = useMediaQuery({ maxWidth: 667 });

  const images = [
    { src: image1, label: 'BOLSAS' },
    { src: image2, label: 'TÊNIS' },
    { src: image3, label: 'ÓCULOS' },
    { src: image4, label: 'OUTLET' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex justify-center items-center w-full">
      {isMobile ? (
        <Slider {...settings} className="w-full lg:w-auto">
          {images.map((image, index) => (
            <div key={index} className="h-[500px] flex justify-center items-end relative group">
              <div
                className="h-[500px] w-full lg:w-[400px] flex-1 border bg-cover bg-center flex justify-center items-end relative group"
                style={{ backgroundImage: `url('${image.src}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0 "></div>
                <Link to='#' className='w-48 h-20  border bg-slate-800/10 rounded-full flex items-center justify-center mb-56'>
                  <span className="relative z-10 font-bold text-3xl text-white  transition-transform duration-500 ease-in-out group-hover:translate-y-6">{image.label}</span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap lg:flex-col justify-center items-center h-[600px] lg:space-y-0 lg:space-x-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="h-[600px] w-[400px] flex-1 border bg-cover bg-center flex justify-center items-end relative group"
                style={{ backgroundImage: `url('${image.src}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0"></div>
                <span className="relative z-10 mb-32 font-bold text-3xl text-white -rotate-90 transition-transform duration-500 ease-in-out group-hover:translate-y-6">{image.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



