import { Link } from "react-router-dom";

import Banner from "../../components/Banner";
import Menu from "../../components/Menu";

import refundIcon from '../../../assets/images/icons/refund.svg';
import shippingIcon from '../../../assets/images/icons/shipping.svg';
import supportIcon from '../../../assets/images/icons/support.svg';
import Brand from "../../components/Brand";
import { CardProduct } from "../../components/CardProduct";
import Footer from "../../components/Footer";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { newCollection } = useHomeController();
  return (
    <div>
      <Menu />
      <Banner />
      <section className="flex justify-center items-center flex-col gap-8">
        <Brand />
      </section>
      <section className="mt-28 px-14">
        <h2 className="text-center text-4xl font-bold">NOVA COLEÇÃO</h2>
        <p className="text-center text-xs">Confira tudo que á de novo em nossa loja</p>

        <div className="flex flex-wrap  justify-center gap-12 mt-20 px-8">
          {newCollection.map((product) => (
            <CardProduct price={product.price} id={product.id} image={product.image} name={product.name} key={product.name} />
          ))}
          <button className="mt-10 w-full text-center text-lg text-blue-500 hover:opacity-75 transition-all">Carregar mais</button>
        </div>
      </section>


      <section className=" mt-28 flex items-center justify-end bg-banner bg-cover bg-center w-full h-[604px]">
        <div className="w-[400px] flex flex-col justify-center flex-wrap gap-6 px-6 pr-20 pb-12">
          <h2 className="text-gray-50 text-[55px] font-medium">Melhores Sneakers</h2>
          <p className="text-gray-500 text-[24px] w-80">Desempenho e design. Levado direto ao limite.</p>
          <Link className="w-[112px] text-gray-200 font-semibold border-b-2 border-gray-300 transition-opacity duration-300 ease-in-out hover:opacity-60" to="#">Compre agora</Link>
        </div>
      </section>

      <section className="mt-28 mb-28 flex justify-evenly items-center">

        <div className="flex flex-col gap-7  items-center w-60 h-52">
          <img className="w-16 h-16" src={shippingIcon} alt="" />
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold">Entrega Gratis</h3>
            <p className="text-center">Receba seus produtos com frete gratuito para todo o estado de São Paulo.</p>
          </div>
        </div>

        <div className="flex flex-col gap-7  items-center w-60 h-52">
          <img className="w-16 h-16" src={refundIcon} alt="" />
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold">Política de Troca</h3>
            <p className="text-center">Troque produtos defeituosos facilmente sem custo.</p>
          </div>
        </div>

        <div className="flex flex-col gap-7  items-center w-60 h-52">
          <img className="w-16 h-16" src={supportIcon} alt="" />
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-bold">Suporte 24/7</h3>
            <p className="text-center">Estamos disponíveis a qualquer hora para ajudar você.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )

}
