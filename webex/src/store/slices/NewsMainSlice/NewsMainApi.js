import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getNewsMainPage = createAsyncThunk(
    'newsMainPage/getNewsMainPage',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/news/getNewsByCategories",
          };
          
          const response = await instance(config);
            console.log(response.data.data,333333333333333);
          return response?.data.data
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

