import { createSlice } from "@reduxjs/toolkit";
import { postResetPassword } from "./ResetEmailApi";

const initialState = {
   data: {
      success: false,
      message: ""
   },
   status: 'idle',
   error: null,
   loading: true
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
            state.data = action.payload.message.original
            state.loading = false
             state.status = 'succes';
          })
          .addCase(postResetPassword.rejected, (state, action) => {
            state.status = 'failed';
            state.data.message = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectResetPassword = (state) => state.resetPassword
export const selectResetPasswordLoading = (state) => state.resetPassword.loading

 export const {} = resetPasswordSlice.actions

export const resetPasswordReducer =  resetPasswordSlice.reducer