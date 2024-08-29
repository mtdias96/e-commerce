import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://e46d-2804-431-cfd9-4a44-4980-7f4c-24b8-7c6a.ngrok-free.app ',
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
})

export default httpClient
