import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getNewsUniquePage = createAsyncThunk(
    'newsUniquePage/getNewsUniquePage',
    async (id, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: `news/getNews/${id}`,
          };
          
          const response = await instance(config);
            console.log(response.data,333333333333333);
          return response?.data.data
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

