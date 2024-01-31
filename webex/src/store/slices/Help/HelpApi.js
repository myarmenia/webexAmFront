import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";


export const sendClientQuestion = createAsyncThunk(
  'clientquestion/sendClientQuestion',
  async (data, thunkAPI) => {
    console.log("data",data)
      try {
        const config = {
          method: "post",
          data: data,
          url: '/email/clientQuestion',
        };
        
        const response = await instance(config);
          console.log(response);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error.both);
      }
    }
)