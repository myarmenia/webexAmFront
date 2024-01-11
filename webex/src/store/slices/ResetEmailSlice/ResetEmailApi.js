import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../../axios";

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
    
          const response = await customAxios(config);
          sessionStorage.setItem("token", response.data.access_token);
          return true;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)