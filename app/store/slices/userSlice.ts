import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface UserRoleState {
  role: "student" | "teacher" | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserRoleState = {
  role: null,
  loading: false,
  error: null,
};

export const fetchUserRole = createAsyncThunk(
  "user/fetchRole",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get("http://localhost:8080/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("dashboard data", response.data);
      return response.data.message; // API returns role in `message`
    } catch (error) {
      console.error("Error fetching user role:", error);
      return rejectWithValue("Failed to fetch user role");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserRole.fulfilled,
        (state, action: PayloadAction<"student" | "teacher">) => {
          state.loading = false;
          state.role = action.payload;
        }
      )
      .addCase(fetchUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
