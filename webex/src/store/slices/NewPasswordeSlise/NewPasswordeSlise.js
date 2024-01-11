import { createSlice } from "@reduxjs/toolkit";
import { postNewPassword } from "./NewPasswordeApi";

const initialState = {
   massage: '',
   status: 'idle',
   error: null,
   };

const newPasswordSlice = createSlice({
    name: 'newPassword',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postNewPassword.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postNewPassword.fulfilled, (state, action) => {
            state.massage = action.payload.massage
             state.status = 'succes';
          })
          .addCase(postNewPassword.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectNewPassword = (state) => state.newPassword

 export const {} = newPasswordSlice.actions

export const newPasswordReducer =  newPasswordSlice.reducer