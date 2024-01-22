import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";

export const getDashboard = createAsyncThunk(
    'dashboard/getDashboard',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/dashboard",
          };
          
          const response = await instance(config);
            console.log(response);
          return response?.data?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)