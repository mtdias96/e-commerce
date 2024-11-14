import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://5e38-2804-431-cfd9-6b67-b0ac-107a-4232-838f.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

export default httpClient;
