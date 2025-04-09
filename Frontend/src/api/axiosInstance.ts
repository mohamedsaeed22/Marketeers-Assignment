import CookieService from "@/services/CookieService";
import axios from "axios";

// Base API URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = CookieService.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.error(error);
      setTimeout(() => {
        if (CookieService.get("token")) {
          CookieService.remove("token");
          window.location.href = "/login";
        }
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export { api };
