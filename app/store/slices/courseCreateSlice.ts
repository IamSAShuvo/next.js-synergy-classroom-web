import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://192.168.0.204:8080/course/create";

interface CreateCourseRequest {
  title: string;
  books: {
    name: string;
    author: string;
  }[];
}

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (courseData: CreateCourseRequest, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.post(API_URL, courseData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      // Return the response data if successful
      return response.data;
    } catch (error) {
      return rejectWithValue(
        axios.isAxiosError(error)
          ? error.response?.data || "Failed to create courses"
          : "Failed to create courses"
      );
    }
  }
);

const courseCreateSlice = createSlice({
  name: "courseCreate",
  initialState: {
    isLoading: false,
    success: false,
    error: null as string | null,
  },
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetState } = courseCreateSlice.actions;

export default courseCreateSlice.reducer;
