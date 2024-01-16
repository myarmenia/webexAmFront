import { createSlice } from "@reduxjs/toolkit";
import { postVerifyAccount } from "./VerifyAccountApi";

const initialState = {
   massage: '',
   status: 'idle',
   error: null,
   };

const verifyAccountSlice = createSlice({
    name: 'verifyAccount',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postVerifyAccount.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postVerifyAccount.fulfilled, (state, action) => {
            state.massage = action.payload
             state.status = 'succes';
          })
          .addCase(postVerifyAccount.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectVerifyAccount = (state) => state.verifyAccount

 export const {} = verifyAccountSlice.actions

export const verifyAccountReducer =  verifyAccountSlice.reducer