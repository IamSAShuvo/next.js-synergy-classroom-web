import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import api from "./authenticationSlice/api";

interface Book {
  name: string;
  author: string;
}

interface Course {
  id: number;
  courseId: number;
  courseTitle: string;
  title: string;
  books: Book[];
  teacherName?: { name: string }[];
}

interface CourseState {
  courses: Course[];
  role: string;
  courseId: number | null;
  teacherName: string;
  loading: boolean;
  error: string | { message: string } | null;
}

const initialState: CourseState = {
  courses: [],
  role: "",
  courseId: null,
  teacherName: "",
  loading: false,
  error: null as string | null | { message: string },
};

export const fetchCourses = createAsyncThunk(
  "courses/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      // const response = await axios.get("http://192.168.0.204:8080/dashboard", {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     "Content-Type": "application/json",
      //   },
      // });

      const response = await api.get("/dashboard");

      const courseData: Course[] = response.data.data;

      const roleMatch = response.data.message.match(/the (\w+)/);
      const role = roleMatch ? roleMatch[1].toLowerCase() : "";

      let teacherName = "";

      if (response.data.message.includes("Teacher")) {
        const matches = response.data.message.match(/Name: (\w+ \w+)/g);
        if (matches) {
          teacherName = matches
            .map((match: string) => match.split(": ")[1])
            .join(", ");
        }
      }

      console.log(response.data);
      console.log({ teacherName });
      return {
        courses: courseData,
        role,
        teacherName,
      };
    } catch (error) {
      return rejectWithValue(
        axios.isAxiosError(error)
          ? error.response?.data || "Failed to fetch courses"
          : "Failed to fetch courses"
      );
    }
  }
);

const dashboardSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCourses.fulfilled,
        (
          state,
          action: PayloadAction<{
            courses: Course[];
            role: string;
            teacherName: string;
          }>
        ) => {
          state.loading = false;
          state.courses = action.payload.courses;
          state.role = action.payload.role;
          state.teacherName = action.payload.teacherName; // Now storing teacher names as a string
        }
      )
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
