import Banner from "../../components/Banner";
import { CardProduct } from "../../components/CardProduct";
import { Menu } from "../../components/Menu";


export function Home() {
  return (
    <div>
      <Menu />
      <Banner/>

      <section className="mt-28">
        <h2 className="text-center text-4xl font-bold">BEST SELLER</h2>
        <div className="flex flex-wrap gap-6 justify-center mt-5">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
        <button className="mt-10 w-full text-center text-lg text-blue-500 hover:opacity-75 transition-all">Carregar mais</button>
      </section>

      <section className="bg-banner bg-cover bg-center w-full h-64">
      </section>
    </div>
  )

}
