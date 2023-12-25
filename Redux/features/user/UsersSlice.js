  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import { POST } from "@/repository/AxiosRepository";
  import Cookies from "js-cookie";
  import {error} from "next/dist/build/output/log";

  const INITIAL_STATE = {
    token: null,
    loginUserLoading: false,
    error: null,
  };

  export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (values, { rejectWithValue }) => {
      try {
        const response = await POST("/users/login", values);
        if (response.data?.token) return response.data;
        else return rejectWithValue("user is not login");
      } catch (error) {
        return error.message;
      }
    },
  );

  const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
      [loginUser.pending]: (state) => {
        state.loginUserLoading = true;
        state.error = null;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.token = action.payload.token;
        window.location.href= '/'
        // Cookies.set("token", action.payload.token , {expires: 1});
      },
      [loginUser.rejected]: (state, action) => {
        state.loginUserLoading = false;
        state.error = action.payload;
        state.token = null;
      },
    },
  });

  export const {} = userSlice.actions;
  export default userSlice.reducer;