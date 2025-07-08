import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Use relative URL to go through Next.js proxy
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
