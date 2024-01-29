import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postFeedBack = createAsyncThunk(
    'feedBack/postFeedBack',

    async (body, thunkAPI) => {
        try {
          const config = {
            method: "post",
            url: "/email/feedback",
            data: body,
          };
    
          const response = await instance(config);
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error);
        }
      }
)