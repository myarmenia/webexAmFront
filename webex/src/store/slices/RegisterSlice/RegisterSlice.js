import { createSlice } from "@reduxjs/toolkit";
import { postRegister } from "./RegisterApi";

const initialState = {
   authUser: {},
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
            state.authUser = action.payload.authUser
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