import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface Book {
  name: string;
  author: string;
}

interface Course {
  courseId: number;
  courseTitle: string;
  books: Book[];
  teacherName: { name: string }[];
}

interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CourseState = {
  courses: [],
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

      return response.data.data; // Ensure API returns data in `data.data`
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
        (state, action: PayloadAction<Course[]>) => {
          state.loading = false;
          state.courses = action.payload;
        }
      )
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
