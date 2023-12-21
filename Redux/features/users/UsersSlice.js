import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "@/repository/AxiosRepository";

const INITIAL_STATE = {
  token: null,
  loginUserLoading: false,
  error: null
};

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (values) => {
      try {
        const response = await POST("/users/login", values)
          console.log(response)
          return response.data;
      } catch (error) {
          console.log(error.message)
        return error.message;
      }
    }
);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
      //settoken
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
        state.loginUserLoading = true;
        state.error = null
    },
    [loginUser.fulfilled]: (state , action) => {
        state.loginUserLoading = false;
        state.token = action.payload;
    },
    [loginUser.rejected]:(state , action) => {
        state.loginUserLoading = false;
        state.error = action.payload;
    }
  }});

export const {} = userSlice.actions;
export default userSlice.reducer;