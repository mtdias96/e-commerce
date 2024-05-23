import facebook from '../../assets/Facebook.svg';
import google from '../../assets/Google.svg';

export function ButtonSocial() {
  return (
    <>
      <div className="flex items-center mt-9">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm font-bold">ou</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-7">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={google} alt="icon" className="w-8 h-6 text-gray-500" />
          </div>
          <button className=" w-full px-6 h-12 rounded-xl border border-blue-200 hover:bg-gray-100">Entrar com Google</button>
        </div>
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={facebook} alt="icon" className="w-8 h-6 text-gray-500" />
          </div>
          <button className=" w-full px-6 h-12 rounded-xl border border-blue-200 hover:bg-gray-100">Entrar com Facebook</button>
        </div>
      </div>

    </>
  )
}
