import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import banner1 from '../../assets/images/banner/banner1.jpeg';
import banner2 from '../../assets/images/banner/banner2.webp';
import banner3 from '../../assets/images/banner/banner3.png';


const images = [banner1, banner2, banner3];

export function Banner(){
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="h-[600px] mt-40 slider-container w-full overflow-hidden outline-none">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={image[index]} className="slide-item">
            <img className="h-[500px] w-full object-cover" src={image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
