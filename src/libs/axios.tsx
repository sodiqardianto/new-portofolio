import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.sodiqardianto.com/api",
  // baseURL: "http://127.0.0.1:8000/api/",
});
