import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postResetPasswordPage = createAsyncThunk(
    'resetPasswordPage/postResetPasswordPage',

    async (body, thunkAPI) => {
        try {
          const resetPasswordePageData = {
            email: body.email,
            token: body.token
          };

          const config = {
            method: "post",
            url: "/check-forgot-token",
            data: resetPasswordePageData,
          };
    
          const response = await instance(config);
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)