import axios from "axios";
import { config } from "dotenv";

config();

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
