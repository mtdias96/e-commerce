import axios from "axios";

export const httpClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: 'https://ecommerce-api-jo6k.onrender.com'
})


export default httpClient
