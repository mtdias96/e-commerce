import { Link } from "react-router-dom";
import facebook from '../../assets/Facebook.svg';
import insta from '../../assets/images/icons/insta.webp';
import master from '../../assets/images/icons/master.svg';
import paypal from '../../assets/images/icons/paypal.svg';
import visaa from '../../assets/images/icons/visa.png';
import x from '../../assets/images/icons/x.png';
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <footer className=" w-full bg-black p-8 md:p-16 top-0">
      <div className="flex flex-col md:flex-row justify-between text-white">
        <div className="flex flex-col items-start gap-4 mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center gap-2">
            <Logo className="w-12 text-black" />
            <p className="text-2xl font-bold">NEWBOOT</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 mb-8 md:mb-0 md:w-1/3">
          <h5 className="text-lg font-medium">Siga-nos em nossas redes</h5>
          <p className="text-sm w-48">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex justify-center items-center gap-4">
            <img className="w-9 h-9" src={facebook} alt="Facebook" />
            <img className="w-11 h-11" src={insta} alt="Instagram" />
            <img className="w-7 h-7 rounded bg-transparent" src={x} alt="Twitter" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:w-1/3">
          <h4 className="text-lg font-semibold">Entre em contato</h4>
          <p className="text-sm">
            e-commerce@ecomerce.com.br <br />
            (13) 3333-3333 <br />
            (13) 9999-9999
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 border-t border-gray-700 pt-8 text-white">
        <div className="flex flex-col gap-4 md:w-1/4">
          <h4 className="text-lg font-semibold">Informações</h4>
          <Link to="#" className="text-sm">Sobre nós</Link>
          <Link to="#" className="text-sm">Política de privacidade</Link>
          <Link to="#" className="text-sm">Termos e condições</Link>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4">
          <h4 className="text-lg font-semibold">Serviços</h4>
          <Link to="#" className="text-sm">Sobre nós</Link>
          <Link to="#" className="text-sm">Política de privacidade</Link>
          <Link to="#" className="text-sm">Termos e condições</Link>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4">
          <h4 className="text-lg font-semibold">Minha conta</h4>
          <Link to="#" className="text-sm">Sobre nós</Link>
          <Link to="#" className="text-sm">Política de privacidade</Link>
          <Link to="#" className="text-sm">Termos e condições</Link>
        </div>

        <div className="flex flex-col gap-4 md:w-1/4">
          <h4 className="text-lg font-semibold">Nossas ofertas</h4>
          <Link to="#" className="text-sm">Sobre nós</Link>
          <Link to="#" className="text-sm">Política de privacidade</Link>
          <Link to="#" className="text-sm">Termos e condições</Link>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <img src={master} alt="MasterCard" className="w-12" />
        <img src={paypal} alt="PayPal" className="w-12" />
        <img src={visaa} alt="Visa" className="w-12" />
      </div>
    </footer>
  );
};

export default Footer;
