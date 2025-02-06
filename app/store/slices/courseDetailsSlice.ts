import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface Book {
  id: number;
  name: string;
  author: string;
}

interface Course {
  id: number;
  title: string;
  books: Book[];
}

interface CourseState {
  course: Course | null;
  books: Book[] | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CourseState = {
  course: null,
  books: null,
  loading: false,
  error: null,
};

export const fetchCourseDetails = createAsyncThunk(
  "course/fetchDetails",
  async (
    courseIdentifier: { id?: string; courseId?: string },
    { rejectWithValue }
  ) => {
    try {
      const id = courseIdentifier.id || courseIdentifier.courseId;
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.post(
        `http://192.168.0.204:8080/course/details`,
        { courseId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const course = response.data.data;
      const books = course.books;

      return { course, books };
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (axios.isAxiosError(error)) {
        console.error("Error details:", error.response?.data);
        return rejectWithValue(
          error.response?.data || "Failed to fetch course details"
        );
      } else {
        console.error("Non-Axios error:", error);
        return rejectWithValue("Failed to fetch course details");
      }
    }
  }
);

const courseDetailsSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCourseDetails.fulfilled,
        (state, action: PayloadAction<{ course: Course; books: Book[] }>) => {
          state.loading = false;
          state.course = action.payload.course;
          state.books = action.payload.books;
        }
      )
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default courseDetailsSlice.reducer;
