import { createSlice } from "@reduxjs/toolkit";
import { postRegister } from "./RegisterApi";

const initialState = {
   data: {
      succes: false,
      message: ""
   },
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
            state.data = action.payload
             state.status = 'succes';
          })
          .addCase(postRegister.rejected, (state, action) => {
            if(action.payload.email){
               state.data.message = action.payload.email[0]
            }
            // Object.keys(action.payload).map((error) => {
            //    console.log(action.payload[error][0], 66333)
            // })
            state.status = 'failed';
          });
    },
 });
 

export const selectRegister = (state) => state.register

 export const {} = registerSlice.actions

export const registerReducer =  registerSlice.reducer