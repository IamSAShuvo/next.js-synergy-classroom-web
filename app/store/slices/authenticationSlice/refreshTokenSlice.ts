import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

const initialState = {
  accessToken: Cookies.get("token") || null,
  refresh_Token: localStorage.getItem("refreshToken") || null,
  status: "idle",
  error: null as string | null,
};

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        return rejectWithValue("No refresh token available");
      }
      const response = await axios.post(
        "http://192.168.0.204:8080/refresh",
        {},
        {
          headers: {
            "Refresh-Token": refreshToken,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Refresh token failed due to network error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refresh_Token = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.refresh_Token = action.payload.refreshToken;
        Cookies.set("accessToken", action.payload.accessToken);
        Cookies.set("refreshToken", action.payload.refreshToken);
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string | null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
