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
  books: Book[];
  teacherName: { name: string }[];
}

interface CourseState {
  courses: Course[];
  role: string;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CourseState = {
  courses: [],
  role: "",
  loading: false,
  error: null,
};

// **Thunk to fetch courses**
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
      console.log(response.data.message); // Log to inspect message structure

      // Extract role
      const roleMatch = response.data.message.match(/the (\w+)/);
      const role = roleMatch ? roleMatch[1].toLowerCase() : ""; // Set default empty string if no match

      console.log("Extracted Role:", role);

      return { courses: response.data.data, role: role };
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

// **Course Slice**
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
        (state, action: PayloadAction<{ courses: Course[]; role: string }>) => {
          console.log("action payload", action.payload);
          state.loading = false;
          state.courses = action.payload.courses;
          state.role = action.payload.role;
        }
      )
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
