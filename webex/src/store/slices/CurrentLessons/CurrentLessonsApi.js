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
          return response?.data?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

export const getCurrentLanguageLesson = createAsyncThunk(
  'currentLessons/getCurrentLanguageLesson',
  async (id, thunkAPI) => {
    console.log("id",id)
      try {
        const config = {
          method: "get",
          url: `/language-lessons/${id}`,
        };
        
        const response = await instance(config);
          console.log(response);
        return response?.data?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error.both);
      }
    }
)