import axios from "axios";
import Cookies from "js-cookie";

import store from "../../store";
import { logoutUser, refreshToken } from "./authActions/authActions";

const API_BASE_URL = "http://192.168.0.204:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach Authorization Header
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios Interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await store.dispatch(refreshToken());

        if (refreshResponse.payload?.accessToken) {
          const newAccessToken = refreshResponse.payload.accessToken;
          Cookies.set("token", newAccessToken);

          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        store.dispatch(logoutUser()); // Logout if refresh fails
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
