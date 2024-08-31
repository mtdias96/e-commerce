import axios from "axios";

export const httpClient = axios.create({
  // baseURL: 'https://e9ae-2804-431-cfd9-4a44-e17b-ec89-cdf3-ffb7.ngrok-free.app',
  // headers: {
  //   'ngrok-skip-browser-warning': 'true'
  // }

  baseURL: 'http://localhost:8080'
})

export default httpClient
