// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// interface User {
//   id: string;
//   username: string;
//   role: "student" | "teacher";
// }

// interface LoginResponse {
//   success: boolean;
//   message: string;
//   data: {
//     id: string;
//     username: string;
//     role: "student" | "teacher";
//     accessToken: string;
//     refreshToken: string;
//   };
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   loading: boolean;
//   error: string | null;
// }

// // Retrieve token and user from sessionStorage (on page reload)
// const storedToken =
//   typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
// const storedUser =
//   typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

// const initialState: AuthState = {
//   user: storedUser ? JSON.parse(storedUser) : null,
//   token: storedToken || null,
//   loading: false,
//   error: null,
// };

// // authSlice.ts
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (
//     {
//       username,
//       password,
//       callback,
//     }: { username: string; password: string; callback: () => void },
//     { rejectWithValue }
//   ) => {
//     try {
//       console.log("Attempting to login with credentials", {
//         username,
//         password,
//       });

//       const response = await axios.post(
//         "http://localhost:8080/login",
//         { username, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("API response", response);

//       callback();

//       return response.data;
//     } catch (error) {
//       console.error("Error during login attempt:", error);
//       if (axios.isAxiosError(error) && error.response) {
//         console.error("Error Response:", error.response);
//         return rejectWithValue(error.response.data);
//       }
//       return rejectWithValue("Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       sessionStorage.removeItem("token");
//       sessionStorage.removeItem("user");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         loginUser.fulfilled,
//         (state, action: PayloadAction<LoginResponse>) => {
//           console.log("user data from API: ", action.payload);
//           const { accessToken, ...userData } = action.payload.data;
//           state.loading = false;
//           state.user = userData; // Store user details only
//           state.token = accessToken; // Store access token

//           // Save in sessionStorage for persistence
//           sessionStorage.setItem("token", accessToken);
//           sessionStorage.setItem("user", JSON.stringify(userData));
//         }
//       )
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

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
      console.log(response.data);
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
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        console.log(action.payload);
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;

        Cookies.set("token", action.payload.token);
        Cookies.set("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
