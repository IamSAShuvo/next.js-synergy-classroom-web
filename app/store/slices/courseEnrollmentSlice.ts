import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface EnrollState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: EnrollState = {
  loading: false,
  success: false,
  error: null,
};

export const enrollInCourse = createAsyncThunk(
  "course/enroll",
  async (courseId: number, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      if (!token) {
        return rejectWithValue("User is not authenticated");
      }

      const response = await axios.post(
        "http://192.168.0.204:8080/course/enroll",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Enrollment API call failed:", error);

      if (axios.isAxiosError(error) && error.response) {
        console.error("API returned error response:", error.response);
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Enrollment failed due to network error");
    }
  }
);

const courseEnrollSlice = createSlice({
  name: "courseEnroll",
  initialState,
  reducers: {
    reset: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enrollInCourse.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(enrollInCourse.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(enrollInCourse.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { reset } = courseEnrollSlice.actions;
export default courseEnrollSlice.reducer;
