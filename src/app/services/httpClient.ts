import axios from "axios";

export const httpClient = axios.create({
  // baseURL: 'https://ecommerce-api-jo6k.onrender.com'
  baseURL: 'http://localhost:3001'
})

export default httpClient
