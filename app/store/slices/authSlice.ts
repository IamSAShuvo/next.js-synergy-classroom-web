import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  data: {
    accessToken: string;
    refreshToken: string;
  };
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
const storedToken = typeof window !== "undefined" ? Cookies.get("token") : null;
const storedUser = typeof window !== "undefined" ? Cookies.get("user") : null;

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
      const response = await axios.post(
        "http://localhost:8080/signup",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

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
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("Login failed");
    }
  }
);

// Logout User Action (API call for server-side logout)
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // Retrieve the Bearer token from cookies (or wherever you store it)
      const token = Cookies.get("token");

      if (!token) {
        return rejectWithValue("No token found");
      }

      // API call to backend logout with Bearer token in the Authorization header
      const response = await axios.post(
        "http://localhost:8080/logout", // Replace with your logout endpoint
        {}, // Empty body since we are logging out
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include Bearer token here
          },
          withCredentials: true, // Include cookies in the request if needed
        }
      );

      console.log("logout response:", response.data); // Log API response for debugging
      return response.data; // return response data if successful
    } catch (error) {
      console.error("Logout API error:", error); // Log the error that happened in the API call
      return rejectWithValue("Logout failed"); // handle error
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
        state.loading = false;
        // state.user = action.payload;
        // state.token = action.payload.token;
        Cookies.set("token", action.payload.data.accessToken, { expires: 1 });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    // Handle async logout action
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
