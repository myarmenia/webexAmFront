import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";

export const editUser = createAsyncThunk(
  'profile/editUser',
  async (data, thunkAPI) => {

      try {
        const config = {
          method: "post",
          data: data,
          url: 'user/edit',
        };
        
        const response = await instance(config);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error.both);
      }
    }
)

export const editPassword = createAsyncThunk(
  'profile/editPassword',
  async (data, thunkAPI) => {

      try {
        const config = {
          method: "post",
          data: data,
          url: 'user/editPassword',
        };
        
        const response = await instance(config);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error.both);
      }
    }
)