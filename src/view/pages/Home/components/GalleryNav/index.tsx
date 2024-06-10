import image1 from './homebanner/home-acessorios-19-02.webp';
import image2 from './homebanner/home-tenis-19-02.webp';
import image3 from './homebanner/image.png';
import image4 from './homebanner/superstar-desk.webp';

export function GalleryNav() {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-wrap lg:flex-col justify-center items-center h-[600px] lg:space-y-0 lg:space-x-4">
        <div
          className="h-[600px] w-[400px] flex-1 border  bg-cover bg-center flex justify-center items-end relative group"
          style={{ backgroundImage: `url('${image1}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0"></div>
          <span className="relative z-10 mb-32 font-bold text-3xl text-white -rotate-90 transition-transform duration-500 ease-in-out group-hover:translate-y-6">BOLSAS</span>
        </div>
        <div
          className="h-[600px] w-[400px] flex-1 border  bg-cover bg-center flex justify-center items-end relative group"
          style={{ backgroundImage: `url('${image2}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0"></div>
          <span className="relative z-10  font-bold text-3xl mb-32  text-white -rotate-90 transition-transform duration-500 ease-in-out group-hover:translate-y-6">TÊNIS</span>
        </div>
        <div
          className="h-[600px] w-[400px] flex-1 border  bg-cover bg-center flex justify-center items-end relative group"
          style={{ backgroundImage: `url('${image3}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0"></div>
          <span className="relative z-10 mb-32 font-bold text-3xl text-white -rotate-90 transition-transform duration-500 ease-in-out group-hover:translate-y-6">OCULOS</span>
        </div>
        <div
          className="h-[600px] w-[400px] flex-1 border  bg-cover bg-center flex justify-center items-end relative group"
          style={{ backgroundImage: `url('${image4}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0"></div>
          <span className="relative z-10 mb-32  font-bold text-3xl text-white -rotate-90 transition-transform duration-500 ease-in-out group-hover:translate-y-6">OUTLET</span>
        </div>
      </div>
    </div>
  );
}
