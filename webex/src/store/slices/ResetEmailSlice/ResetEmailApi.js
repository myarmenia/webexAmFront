import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postResetPassword = createAsyncThunk(
    'resetPassword/postResetPassword',

    async (body, thunkAPI) => {
        try {
          const resetEmailData = {
            email: body.email,
          };

          const config = {
            method: "post",
            url: "/forgot-password",
            data: resetEmailData,
          };
    
          const response = await instance(config);
          sessionStorage.setItem("token", response.data.access_token);
          return response?.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)