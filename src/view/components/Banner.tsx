import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import banner1 from '../../assets/images/banner/banner1.jpeg';
import banner2 from '../../assets/images/banner/banner2.webp';

const images = [banner1, banner2];

export function Banner() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="w-full pt-16 md:pt-28">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <img className="w-full object-cover " src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
