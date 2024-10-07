import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInvitationCategoryes = createAsyncThunk(
  'invitationCategoryes/getInvitationCategoryes',
  async (categories, thunkAPI) => {
    try {
      const queryString = categories.length > 0
        ? categories.map(id => `category_id[]=${id}`).join('&')
        : '';

      const language = localStorage.getItem('lang') || 'am'; 

      const config = {
        headers: {
          'Accept-Language': language, 
        }
      };

      const response = await axios.get(
        `https://backend.invitationcard.webex.am/api/home?${queryString}`, 
        config
      );

      return response?.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
