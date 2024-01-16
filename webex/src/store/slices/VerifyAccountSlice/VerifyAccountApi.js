import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postVerifyAccount = createAsyncThunk(
    'verifyAccount/postVerifyAccount',

    async (body, thunkAPI) => {
        try {
          const verifyAccountData = {
            token: body.token,
            email: body.email,
          };
          
          const config = {
            method: "post",
            url: "auth/check-verify-token",
            data: verifyAccountData,
          };
    
          const response = await instance(config);
          
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)