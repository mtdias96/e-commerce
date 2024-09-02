import httpClient from "../httpClient";

interface IAddressOutput {
  resultCepAddreas: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
  }
  }

export async function cepAddress(cepData: string) {
  const { data } = await httpClient.post<{ resultCepAddreas: IAddressOutput }>('/cep/endereco', {
    cep: cepData,
  });
  console.log(data)

  return data.resultCepAddreas.resultCepAddreas;
}
