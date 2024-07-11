import Slider, { Settings } from "react-slick";
import addidas from '../../assets/images/brand/addidas.webp';
import jordan from '../../assets/images/brand/jordan.webp';
import mizuno from '../../assets/images/brand/mizuno.webp';
import newb from '../../assets/images/brand/newb.webp';
import nike from '../../assets/images/brand/nike.webp';
import obey from '../../assets/images/brand/obey.webp';
import palace from '../../assets/images/brand/palace.webp';
import vans from '../../assets/images/brand/vans.webp';

export function Brand() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const brands = [vans, nike, mizuno, addidas, newb, jordan, palace, obey];

  return (
    <div className="border border-gray-400 slider-container overflow-hidden outline-none w-full shadow-lg">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center p-4 lg:ml-16 md:ml-36">
            <img className="w-14 md:w-24 h-auto" src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brand;
