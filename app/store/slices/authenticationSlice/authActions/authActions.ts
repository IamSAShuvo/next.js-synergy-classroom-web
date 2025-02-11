import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

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
      const response = await api.post("/signup", userData);
      return response.data;
    } catch (error) {
      console.error("Signup API call failed:", error);

      if (error instanceof AxiosError && error.response) {
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
      const response = await api.post("/login", credentials);
      const { accessToken, refreshToken, role } = response.data.data;

      Cookies.set("token", accessToken);
      Cookies.set("refreshToken", refreshToken);
      Cookies.set("role", role);

      return { accessToken, refreshToken, role };
    } catch (error) {
      console.error("Login API call failed:", error);

      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Login failed due to network error");
    }
  }
);

// 🔹 Refresh Token Action
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = Cookies.get("refreshToken");
      console.log("the refresh token", refreshToken);
      if (!refreshToken) {
        console.error("No refresh token found!");
        return rejectWithValue("No refresh token available");
      }

      console.log("Making API request to refresh token...");
      const response = await api.post(
        "/refresh",
        {},
        {
          headers: {
            "Refresh-Token": refreshToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ New token received:", response.data);

      // Cookies.set("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      console.error("Refresh token API call failed:", error);

      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Refresh token failed due to network error");
    }
  }
);

// 🔹 Logout User Action
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/logout");
      Cookies.remove("token");
      Cookies.remove("refreshToken");
      return;
    } catch (error) {
      console.error("Logout API call failed:", error);

      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data || "Unknown error");
      }

      return rejectWithValue("Logout failed due to network error");
    }
  }
);
