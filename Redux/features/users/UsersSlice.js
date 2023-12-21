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
  creators: { asyncThunk: createAsyncThunk },
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;