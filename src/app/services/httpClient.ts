import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://ecommerce-api-jo6k.onrender.com'

})

export default httpClient
