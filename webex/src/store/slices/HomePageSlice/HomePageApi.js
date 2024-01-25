import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getHomePage = createAsyncThunk(
    'homePage/gethomePage',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/home",
          };
          
          const response = await instance(config);
            console.log(response,333333333333333);
          return response?.data.data;
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

