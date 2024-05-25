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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="border  border-gray-400 rounded-xl slider-container overflow-hidden outline-none w-full  shadow-lg ">
      <Slider {...settings}>
        <div className="slide-item  text-white">
          <div className="flex justify-evenly items-center">
            <img className="w-24" src={vans} alt="" />
            <img className="w-24" src={nike} alt="" />
            <img className="w-24" src={mizuno} alt="" />
            <img className="w-24" src={addidas} alt="" />
            <img className="w-24" src={newb} alt="" />
          </div>
        </div>
        <div className="slide-item  text-white">
          <div className="flex justify-evenly ">
            <img className="w-24" src={jordan} alt="" />
            <img className="w-24" src={palace} alt="" />
            <img className="w-24" src={mizuno} alt="" />
            <img className="w-24" src={obey} alt="" />
            <img className="w-24" src={addidas} alt="" />

          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Brand;
