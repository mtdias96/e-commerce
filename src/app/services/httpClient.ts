import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://loving-fond-rodent.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
})

export default httpClient
