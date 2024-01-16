import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";

export const getCurrentLesson = createAsyncThunk(
    'currentLessons/getCurrentLesson',
    async (_, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: "/user-current-lesson",
          };
    
          const response = await instance(config);
            console.log(response);
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)