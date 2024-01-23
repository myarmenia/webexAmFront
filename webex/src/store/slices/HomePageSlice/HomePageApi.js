import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getHomePage = createAsyncThunk(
    'homePage/gethomePage',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/Home",
          };
          
          const response = await instance(config);
            console.log(response);
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

