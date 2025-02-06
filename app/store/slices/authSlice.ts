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
  role: string;
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  role: string | null;
  loading: boolean;
  error: string | null;
}

// Retrieve token and user from sessionStorage (on page reload)
const storedToken = typeof window !== "undefined" ? Cookies.get("token") : null;
const storedUser = typeof window !== "undefined" ? Cookies.get("user") : null;

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
  role: storedUser ? JSON.parse(storedUser).role : null,
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
        "http://192.168.0.204:8080/signup",
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
        "http://192.168.0.204:8080/login",
        credentials
      );
      console.log(response.data.data.role);
      return { ...response.data, role: response.data.data.role };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        return rejectWithValue("No token found");
      }

      const response = await axios.post(
        "http://192.168.0.204:8080/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log("logout response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Logout API error:", error);
      return rejectWithValue("Logout failed");
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
        console.log(action.payload.role);
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.data.accessToken;
        state.role = action.payload.role;
        Cookies.set("role", action.payload.role, { expires: 1 });
        Cookies.set("token", action.payload.data.accessToken, { expires: 1 });
        Cookies.set("refreshToken", action.payload.data.refreshToken, {
          expires: 1,
        });
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
