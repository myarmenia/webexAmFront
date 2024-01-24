import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './ProfileApi';


const initialState = {
  message: "",
};

export const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
  
  extraReducers: (builder) => {
    builder
      .addCase(editUser.fulfilled, (state, action) => {
        state.message = action.payload.message
      })
  },
});

export const {
  // setIsAuth
} = profileSLice.actions;

export const getMessage = (state) => state.profile.message;

export const profileReduser = profileSLice.reducer;




