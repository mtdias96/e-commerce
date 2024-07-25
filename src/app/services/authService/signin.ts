import httpClient from "../httpClient";

export interface SigninParams{
  email: string;
  password: string
}

interface SignupResponse {
  accessToken: string
}

export async function signin(params: SigninParams){
 const { data } = await httpClient.post<SignupResponse>('/entrar', params)

 return data
}
