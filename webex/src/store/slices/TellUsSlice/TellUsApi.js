import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postTellUs = createAsyncThunk(
    'tellUs/postTellUs',

    async (body, thunkAPI) => {

        console.log(body,'fffffff');
        try {
          const config = {
            method: "post",
            url: "/email/clientProject",
            data: body,
          };
    
          const response = await instance(config);
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error);
        }
      }
)