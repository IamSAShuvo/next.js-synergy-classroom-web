import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  signupUser,
  refreshToken,
} from "./authActions/authActions";
import Cookies from "js-cookie";

interface User {
  accessToken: string;
  refreshToken: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  role: string | null;
  loading: boolean;
  error: string | null;
}

const storedToken = Cookies.get("token") || null;
const storedRefreshToken = Cookies.get("refreshToken") || "";
const storedRole = Cookies.get("role") || "";

const initialState: AuthState = {
  user: storedToken
    ? {
        accessToken: storedToken,
        refreshToken: storedRefreshToken,
        role: storedRole,
      }
    : null,
  token: storedToken,
  role: storedRole,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      Cookies.remove("token");
      Cookies.remove("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.role = action.payload.role;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        Cookies.set("token", action.payload.accessToken);
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
