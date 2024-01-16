import { createSlice } from "@reduxjs/toolkit";
import { postRegister } from "./RegisterApi";

const initialState = {
   message: {},
   status: 'idle',
   error: null,
   };

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postRegister.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postRegister.fulfilled, (state, action) => {
            state.message = action.payload
             state.status = 'succes';
          })
          .addCase(postRegister.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectRegister = (state) => state.register

 export const {} = registerSlice.actions

export const registerReducer =  registerSlice.reducer