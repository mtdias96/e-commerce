import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import banner1 from '../../assets/images/banner/banner1.png';
import banner2 from '../../assets/images/banner/banner3.png';
import banner3 from '../../assets/images/banner/banner4.jpg';

const images = [banner1, banner2, banner3];

export function Banner(){
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="mt-16 h-[600px] slider-container w-full overflow-hidden outline-none">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={image[index]} className="slide-item">
            <img className="h-[600px] w-full object-cover" src={image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
