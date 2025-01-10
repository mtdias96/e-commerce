import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://ecommerce-api-theta-ten.vercel.app/",
});

export default httpClient;
