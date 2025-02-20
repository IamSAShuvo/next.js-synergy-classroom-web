import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface Student {
  studentId: number;
  studentName: string;
}

interface EnrolledStudentsState {
  students: Student[] | null;
  message: string | null;
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: EnrolledStudentsState = {
  students: null,
  message: null,
  success: false,
  loading: false,
  error: null,
};

export const fetchEnrolledStudents = createAsyncThunk<
  { students: Student[]; message: string; success: boolean },
  { id?: string; courseId?: string }
>("enrolledStudents/fetch", async (courseIdentifier, { rejectWithValue }) => {
  try {
    const id = courseIdentifier.id || courseIdentifier.courseId;
    if (!id) throw new Error("Course ID is required");

    const token = Cookies.get("token");
    if (!token) throw new Error("No authentication token found");

    const response = await axios.get(
      `http://192.168.0.204:8080/course/enrolled/all-student`,
      {
        params: { courseId: id },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { data, message, success } = response.data;

    return { students: data, message, success };
  } catch (error) {
    console.error("Error fetching enrolled students:", error);

    return rejectWithValue(
      axios.isAxiosError(error)
        ? error.response?.data || "Failed to fetch enrolled students"
        : "Failed to fetch enrolled students"
    );
  }
});

const enrolledStudentsSlice = createSlice({
  name: "enrolledStudents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrolledStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEnrolledStudents.fulfilled,
        (
          state,
          action: PayloadAction<{
            students: Student[];
            message: string;
            success: boolean;
          }>
        ) => {
          state.loading = false;
          state.students = action.payload.students;
          state.message = action.payload.message;
          state.success = action.payload.success;
        }
      )
      .addCase(fetchEnrolledStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default enrolledStudentsSlice.reducer;
