import axios from "axios";

export const httpClient = axios.create({
  baseURL: 'https://e89d-187-21-199-40.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
})

export default httpClient
