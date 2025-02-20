import axios from "axios";
import Cookies from "js-cookie";

import store from "../../store";
import { refreshToken } from "./authActions/authActions";

const API_BASE_URL = "http://192.168.0.204:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    if (config.url !== "/refresh") {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshResponse = await store.dispatch(refreshToken());
    }

    return Promise.reject(error);
  }
);

export default api;
