import { createSlice } from "@reduxjs/toolkit";
import { postResetPasswordPage } from "./PasswordResetPageApi";

const initialState = {
   massage: '',
   status: 'idle',
   error: null,
   };

const resetPasswordPageSlice = createSlice({
    name: 'resetPasswordPage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postResetPasswordPage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postResetPasswordPage.fulfilled, (state, action) => {
            state.massage = action.payload.massage
             state.status = 'succes';
          })
          .addCase(postResetPasswordPage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectResetPasswordPage = (state) => state.resetPasswordPage

 export const {} = resetPasswordPageSlice.actions

export const resetPasswordPageReducer =  resetPasswordPageSlice.reducer