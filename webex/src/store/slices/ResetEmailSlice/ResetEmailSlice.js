import { createSlice } from "@reduxjs/toolkit";
import { postResetPassword } from "./ResetEmailApi";

const initialState = {
   massage: '',
   status: 'idle',
   error: null,
   };

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postResetPassword.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postResetPassword.fulfilled, (state, action) => {
            state.massage = action.payload.massage
             state.status = 'succes';
          })
          .addCase(postResetPassword.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectResetPassword = (state) => state.resetPassword

 export const {} = resetPasswordSlice.actions

export const resetPasswordReducer =  resetPasswordSlice.reducer