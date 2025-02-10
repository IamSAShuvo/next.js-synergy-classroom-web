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
import authReducer from "./slices/authenticationSlice/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import userReducer from "./slices/userSlice";
import profileReducer from "./slices/profileSlice";
import courseDetailsReducer from "./slices/courseDetailsSlice";
import seeAllCoursesReducers from "./slices/allCoursesSlice";
import courseEnrollReducer from "./slices/courseEnrollmentSlice";
import courseCreateReducer from "./slices/courseCreateSlice";
import enrolledStudentsReducer from "./slices/enrolledStudentsSlice";
// import refreshTokenReducer from "./slices/authenticationSlice/refreshTokenSlice";
// import axios from "axios";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: dashboardReducer,
    profile: profileReducer,
    courseDetails: courseDetailsReducer,
    seeAllCourses: seeAllCoursesReducers,
    courseEnroll: courseEnrollReducer,
    courseCreate: courseCreateReducer,
    enrolledStudents: enrolledStudentsReducer,
    // refreshToken: refreshTokenReducer,
    users: userReducer,
  },
});

// // Axios Interceptor to attach Bearer Token from Redux
// axios.interceptors.request.use((config) => {
//   const token = store.getState().auth.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
