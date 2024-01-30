import { createSlice } from "@reduxjs/toolkit";
import { postRegister } from "./RegisterApi";

const initialState = {
   data: {
      succes: false,
      message: null
   },
   status: 'idle',
   error: null,
   loading: true,
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
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(postRegister.rejected, (state, action) => {
            // if(action.payload.email){
               state.data.message = action.payload
            // }
            console.log(state.data.message,'pppppp');
            state.loading = false
            state.status = 'failed';
          });
    },
 });
 

export const selectRegister = (state) => state.register
export const selectRegisterLoading = (state) => state.register.loading

 export const {} = registerSlice.actions

export const registerReducer =  registerSlice.reducer