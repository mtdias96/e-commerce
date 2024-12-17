import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://249f-2804-431-cfd9-9e4e-9bf2-20c8-2cd5-5621.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

export default httpClient;
