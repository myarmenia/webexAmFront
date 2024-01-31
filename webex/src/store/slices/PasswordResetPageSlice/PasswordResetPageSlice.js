import { createSlice } from "@reduxjs/toolkit";
import { postResetPasswordPage } from "./PasswordResetPageApi";

const initialState = {
   data: {
      message: '',
      success:  null
   },
   status: 'idle',
   error: null,
   loading: true,
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
            state.data.success = action.payload.success
            state.loading = false
            
          })
          .addCase(postResetPasswordPage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectResetPasswordPage = (state) => state.resetPasswordPage
export const selectResetPasswordPageLoading = (state) => state.resetPasswordPage.loading

 export const {} = resetPasswordPageSlice.actions

export const resetPasswordPageReducer =  resetPasswordPageSlice.reducer