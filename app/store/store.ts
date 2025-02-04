// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";
// // import axios from "axios";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import axios from "axios";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: dashboardReducer,
  },
});

// Axios Interceptor to attach Bearer Token from Redux
axios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
