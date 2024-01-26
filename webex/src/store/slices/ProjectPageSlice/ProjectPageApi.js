import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getProjectPage = createAsyncThunk(
    'projectPage/getprojectPage',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/project/getProject",
          };
          
          const response = await instance(config);
          return response?.data;
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

