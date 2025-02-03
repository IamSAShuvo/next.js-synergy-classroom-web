import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  id: string;
  username: string;
  role: "student" | "teacher";
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Retrieve token and user from sessionStorage (on page reload)
const storedToken =
  typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
const storedUser =
  typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  loading: false,
  error: null,
};

// 🔹 Signup User Action
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (
    userData: {
      username: string;
      email: string;
      password: string;
      role: "student" | "teacher";
      name: string;
    },
    { rejectWithValue }
  ) => {
    try {
      console.log("Sending signup request with data:", userData);

      const response = await axios.post(
        "http://localhost:8080/signup",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup response:", response); // Log the full response
      return response.data;
    } catch (error) {
      console.error("Signup API call failed:", error);

      if (axios.isAxiosError(error) && error.response) {
        console.error("API returned error response:", error.response);
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Signup failed due to network error");
    }
  }
);

// 🔹 Login User Action
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        credentials
      );
      console.log("Login response:", response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
      Cookies.remove("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Signup States
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        console.log("User registered:", action.payload);
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle Login States
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        console.log("User logged in:", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token);
        Cookies.set("user", JSON.stringify(action.payload));
        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
