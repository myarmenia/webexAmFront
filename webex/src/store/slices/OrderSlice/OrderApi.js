import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postOrder = createAsyncThunk(
    'order/postOrder',

    async (body, thunkAPI) => {
        try {
          
          
          console.log(body);
          const config = {
            method: "post",
            url: "/send-order",
            data: body,
          };
    
          const response = await instance(config);
          
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error);
        }
      }
)