import axios from "axios";

export const httpClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: 'http://localhost:3001'
})


export default httpClient
