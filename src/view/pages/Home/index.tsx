import { Link } from "react-router-dom";

import Banner from "../../components/Banner";
import Menu from "../../components/Menu";

import bannerImage from '../../../assets/images/banner/banner6.jpg';
import Brand from "../../components/Brand";
import { CarouselProduct } from "../../components/CarouselProduct";
import Footer from "../../components/Footer";
import { GalleryNav } from "./components/GalleryNav";

export function Home() {
  return (
    <div>
      <Menu />
      <Banner />
      <section className="flex justify-center items-center flex-col gap-8">
        <Brand />
      </section>
      <section className="mt-8 px-14 md:mt-24">
        <h2 className="text-center text-4xl font-bold">LANÇAMENTOS</h2>
        <p className="text-center text-xs mb-4">Confira tudo que á de novo em nossa loja</p>
        <CarouselProduct />
      </section>

      <section className="w-full h-[600px] mt-24 flex flex-col items-center gap-10">
        <p className="text-3xl text-center">
          O QUE VOCÊ
          <span className="block text-center font-extrabold">ESTA BUSCANDO?</span>
        </p>
        <GalleryNav />
      </section>

      <section className="md:flex items-center justify-end bg-cover bg-center w-full h-[604px] hidden mt-48"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="w-[400px] flex flex-col justify-center flex-wrap gap-6 px-6 pr-20 pb-12">
          <h2 className="text-gray-50 text-[55px] font-medium">Melhores Sneakers</h2>3
          <p className="text-gray-500 text-[24px] w-80">Desempenho e design. Levado direto ao limite.</p>
          <Link className=" text-gray-200 font-semibold  border-gray-300 transition-opacity duration-300 ease-in-out hover:opacity-60" to="/produtos">Compre agora</Link>
        </div>
      </section>

      <section className="mt-24 mb-28 px-14">
        <h2 className="text-center text-4xl font-bold">OS MAIS COMPRADOS</h2>
        <p className="text-center text-xs mb-4">CONFIRA OS QUERIDINHOS DA GALERA</p>
        <CarouselProduct />
      </section>

      <Footer />
    </div>
  )

}
