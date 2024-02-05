import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getNewsCategoryPage = createAsyncThunk(
    'newsCategoryPage/getNewsCategoryPage',
    async (body, thunkAPI) => {
        try {
          const config = {
            method: "get",
            url: `/news/getNewsByCategoryType/${body.id}?page=${body.pageIndex}`,
          };
          
          const response = await instance(config);
          return response?.data
         
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)

