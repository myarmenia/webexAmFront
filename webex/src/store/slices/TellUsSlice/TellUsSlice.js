import { createSlice } from "@reduxjs/toolkit";
import { postTellUs } from "./TellUsApi";

const initialState = {
   data: {
      success: false,
      message: ""
   },
   status: 'idle',
   error: null,
   loading: true,
   };

const tellUsSlice = createSlice({
    name: 'tellUs',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postTellUs.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postTellUs.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(postTellUs.rejected, (state, action) => {
            state.status = 'failed';
            if(action.payload){
               state.data.message = action.payload
              }
              state.loading = false
          });
    },
 });
 

export const selectTellUs = (state) => state.tellUs
export const selectTellUsLoading = (state) => state.tellUs.loading

 export const {} = tellUsSlice.actions

export const tellUsReducer =  tellUsSlice.reducer