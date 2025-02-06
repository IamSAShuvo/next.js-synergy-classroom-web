import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface Book {
  name: string;
  author: string;
}

interface Course {
  courseId: number;
  id: number;
  courseTitle?: string;
  title?: string;
  books: Book[];
  teacherName: string;
  numberOfStudentsEnrolled: number;
}

interface CourseState {
  seeAllCourses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  seeAllCourses: [],
  loading: false,
  error: null,
};

// Fetch Courses from New API
export const seeAllCoursesReducers = createAsyncThunk(
  "courses/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get("http://192.168.0.204:8080/course/all", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Fetched Courses:", response.data);
      return response.data.data;
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

const allCoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(seeAllCoursesReducers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        seeAllCoursesReducers.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.loading = false;
          state.seeAllCourses = action.payload; // Correct payload structure
        }
      )
      .addCase(seeAllCoursesReducers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default allCoursesSlice.reducer;
