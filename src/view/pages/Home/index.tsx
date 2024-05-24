import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import { CardProduct } from "../../components/CardProduct";
import { Menu } from "../../components/Menu";


export function Home() {
  return (
    <div>
      <Menu />
      <Banner />

      <section className="mt-28">
        <h2 className="text-center text-4xl font-bold">BEST SELLER</h2>
        <div className="flex flex-wrap gap-6 justify-center mt-5">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <button className="mt-10 w-full text-center text-lg text-blue-500 hover:opacity-75 transition-all">Carregar mais</button>
      </section>

      <section className="mt-28 flex items-center justify-end bg-banner bg-cover bg-center w-full h-[604px]">
        <div className="w-[400px] flex flex-col justify-center flex-wrap gap-6 px-6 pr-20 pb-12">
          <h2 className="text-white text-[55px] font-medium">Melhores Sneakers</h2>
          <p className="text-gray-400 text-[24px] w-80">Desempenho e design. Levado direto ao limite.</p>
          <Link className="w-[132px] text-gray-200 text-[20px] font-semibold border-b-2 border-gray-300 transition-opacity duration-300 ease-in-out hover:opacity-60" to="#">Compre agora</Link>
        </div>
      </section>
    </div>
  )

}
