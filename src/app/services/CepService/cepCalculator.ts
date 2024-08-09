import { ICepDate, IOutputCep } from "../../interfaces/ICep";
import httpClient from "../httpClient";

export async function cepCalculator(cepData: ICepDate){
  const { data } = await httpClient.post<IOutputCep>('/cep/cotacao', cepData)

  return data.resultCepCalculator
 }
