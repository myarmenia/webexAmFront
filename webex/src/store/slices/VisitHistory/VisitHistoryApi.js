import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";

export const getVisitHistory = createAsyncThunk(
    'visithistory/getVisitHistory',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/visit-history",
          };
          
          const response = await instance(config);
            console.log(response);
          return response?.data?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)