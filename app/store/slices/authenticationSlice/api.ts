// import axios from "axios";
// import Cookies from "js-cookie";
// import store from "../../store";
// import { logoutUser } from "./authActions/authActions";

// const API_BASE_URL = "http://192.168.0.204:8080";

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });

// // Attach Authorization Header
// api.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("❌ Unauthorized access. Logging out.");
//       store.dispatch(logoutUser());
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";
import Cookies from "js-cookie";

import store from "../../store";
import { logoutUser, refreshToken } from "./authActions/authActions";

const API_BASE_URL = "http://192.168.0.204:8080";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    // Only attach the Bearer token to requests that are not for "/refresh"
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

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       console.warn("Access token expired, attempting refresh ....");
//       console.log("Stored refresh token:", Cookies.get("refreshToken"));

//       try {
//         const refreshResponse = await store.dispatch(refreshToken());

//         if (refreshResponse.payload?.accessToken) {
//           const newAccessToken = refreshResponse.payload.accessToken;
//           Cookies.set("token", newAccessToken);

//           originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           return api(originalRequest);
//         } else {
//           console.error("Refresh token failed, logging out....");
//           store.dispatch(logoutUser());
//         }
//       } catch (refreshError) {
//         console.error("Error during token refresh:", refreshError);
//         store.dispatch(logoutUser());
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Interceptor caught error:", error.response?.status);

    if (error.response?.status === 401) {
      console.log("401 Unauthorized - Refreshing Token...");
      const refreshResponse = await store.dispatch(refreshToken());
      console.log("Refreshed Token:", refreshResponse);
    }

    return Promise.reject(error);
  }
);

export default api;

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmYWhpbTA2IiwiaWF0IjoxNzM5MTg3MjQ4LCJleHAiOjE3MzkyNzM2NDh9.SEgi_Nib3nSivcbNYb46LXf-6-ED_NIzHGGGWQMdZQA
// Interceptor caught error: 401
// api.ts:104 401 Unauthorized - Refreshing Token...
// authActions.ts:68 Retrieved Refresh Token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmYWhpbTA2IiwiaWF0IjoxNzM5MTgwMTcyLCJleHAiOjE3MzkyNjY1NzJ9.48IlIDJjoYfflNpazYYQUxTkE3ngBsuM5sJn2lUaODA
// authActions.ts:74 Making API request to refresh token...
