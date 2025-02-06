import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Book {
  id: number;
  name: string;
  author: string;
}

export interface Course {
  id: number;
  title: string;
  books: Book[];
}

export interface Profile {
  id: number;
  name: string;
  imageUrl: string | null;
}

export interface ProfileState {
  profile: Profile | null;
  courses: Course[];
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: ProfileState = {
  profile: null,
  courses: [],
  user: null,
  loading: false,
  error: null,
} as ProfileState;

// **Thunk to Fetch Profile Details**
export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const response = await axios.get(
        "http://192.168.0.204:8080/profile/details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const { id, name, imageUrl, user, courses } = response.data.data;

      return {
        profile: { id, name, imageUrl },
        user,
        courses,
      };
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || "Failed to fetch profile"
        );
      } else {
        return rejectWithValue("Failed to fetch profile");
      }
    }
  }
);

// **Profile Slice**
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProfile.fulfilled,
        (
          state,
          action: PayloadAction<{
            profile: Profile;
            user: User;
            courses: Course[];
          }>
        ) => {
          console.log("Fetched Profile:", action.payload);
          state.loading = false;
          state.profile = action.payload.profile;
          state.courses = action.payload.courses;
          state.user = action.payload.user;
        }
      )
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
