import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://ecommerce-api-jo6k.onrender.com'
})

// httpClient.interceptors.response.use(async data => {
//   await sleep(1500)

//   return data
// })

export default httpClient
