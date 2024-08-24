import { useState } from "react";

export const TermsUse = () => {
  const [acceptedTerms, setAcceptedTerms] = useState({
    privacyPolicy: false,
    termsOfUse: false,
    cashbackRegulations: false,
    ageConfirmation: false,
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setAcceptedTerms((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Termos de Uso</h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="privacyPolicy"
            id="privacyPolicy"
            checked={acceptedTerms.privacyPolicy}
            onChange={handleChange}
            className="h-5 w-5 border-orange-500 rounded-md"
          />
          <label htmlFor="privacyPolicy" className="text-sm">
            Estou de acordo com a{" "}
            <a href="/privacy-policy" className="text-orange-700 underline">
              Política de Privacidade
            </a>
            , com os{" "}
            <a href="/terms-of-use" className="text-orange-700 underline">
              Termos de Uso e Condições
            </a>{" "}
            e com o{" "}
            <a
              href="/cashback-regulations"
              className="text-orange-700 underline"
            >
              Regulamento Programa de Cashback
            </a>
            , via CRM Bönus e ciente de que os dados de menores de 12 anos não
            são tratados pelo Grupo AFEET nos portais web.
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="ageConfirmation"
            id="ageConfirmation"
            checked={acceptedTerms.ageConfirmation}
            onChange={handleChange}
            className="h-5 w-5 border-orange-500 rounded-md"
          />
          <label htmlFor="ageConfirmation" className="text-sm">
            Declaro ser maior de 12 anos e concordo que os meus dados pessoais
            sejam coletados para o retorno das minhas solicitações, controle
            interno e acompanhamento da demanda.
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="marketingConsent"
            id="marketingConsent"
            checked={acceptedTerms.marketingConsent}
            onChange={handleChange}
            className="h-5 w-5 border-orange-500 rounded-md"
          />
          <label htmlFor="marketingConsent" className="text-sm">
            Concordo que os meus dados pessoais sejam coletados para o envio de
            newsletter e ativações de campanhas de marketing, conforme descrito
            na{" "}
            <a href="/privacy-policy" className="text-orange-700 underline">
              Política de Privacidade
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
};
