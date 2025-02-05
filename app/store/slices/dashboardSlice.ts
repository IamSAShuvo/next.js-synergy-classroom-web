import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

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
  teacherName: { name: string }[];
}

interface CourseState {
  courses: Course[];
  role: string;
  courseId: number | null;
  teacherName: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  role: "",
  courseId: null,
  teacherName: null,
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get("http://localhost:8080/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.message);
      const courseData = response.data.data;

      const roleMatch = response.data.message.match(/the (\w+)/);
      const role = roleMatch ? roleMatch[1].toLowerCase() : "";
      // Check for teacherName array or message
      let teacherName = "";
      if (courseData.length > 0 && courseData[0]?.teacherName?.length > 0) {
        teacherName = courseData[0].teacherName
          .map((teacher: { name: string }) => teacher.name)
          .join(", ");
      } else if (response.data.message.includes("Teacher")) {
        const matchTeacherName = response.data.message.match(/Name: (\w+ \w+)/);
        teacherName = matchTeacherName ? matchTeacherName[1] : "";
      }
      console.log({ teacherName });
      return {
        courses: response.data.data,
        role: role,
        teacherName: teacherName,
      };
    } catch (error) {
      console.error("Error fetching courses:", error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || "Failed to fetch courses"
        );
      } else {
        return rejectWithValue("Failed to fetch courses");
      }
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
          console.log("action payload", action.payload);
          state.loading = false;
          state.courses = action.payload.courses;
          state.role = action.payload.role;
          state.teacherName = action.payload.teacherName;
        }
      )
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
