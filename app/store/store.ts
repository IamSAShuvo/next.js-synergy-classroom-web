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
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
