  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import { POST } from "@/repository/AxiosRepository";

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
        else return rejectWithValue("شما تا به حال ثبت نام نکردید");
      } catch (error) {
        return error.message;
      }
    },
  );

  const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
      resetError: (state) => {
        state.error = '';
      },
      logout: (state) => {
        state.token = null;
      },
    },
    extraReducers: {
      [loginUser.pending]: (state) => {
        state.loginUserLoading = true;
        state.error = null;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.token = action.payload.token;
        window.location.href= '/'
      },
      [loginUser.rejected]: (state, action) => {
        state.loginUserLoading = false;
        state.error = action.payload;
        state.token = null;
      },
    },
  });


  export const { resetError, logout } = userSlice.actions;
  export default userSlice.reducer;