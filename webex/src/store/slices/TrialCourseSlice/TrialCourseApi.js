import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postTrialCourse = createAsyncThunk(
    'trialCourse/postTrialCourse',

    async (body, thunkAPI) => {
        try {
          const trialCourseData = {
            name: body.name,
            phone: body.phone,
            type: body.type
          };
          
          const config = {
            method: "post",
            url: "/trial-course",
            data: trialCourseData,
          };
    
          const response = await instance(config);
          
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)