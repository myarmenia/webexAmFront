import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../../axios";

export const postNewPassword = createAsyncThunk(
    'newPassword/postNewPassword',

    async (body, thunkAPI) => {
        try {
          const newPasswordData = {
            email: body.email,
            password: body.password,
            password_confirmation: body.confirmPassword
          };

    
          const config = {
            method: "post",
            url: "/send-new-password",
            data: newPasswordData,
          };
    
          const response = await customAxios(config);
          
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)