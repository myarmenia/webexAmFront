import { createSlice } from "@reduxjs/toolkit";
import { postFeedBack } from "./FeedbackApi";

const initialState = {
   data: {
      success: false,
      message: ""
   },
   status: 'idle',
   error: null,
   loading: true,
   };

const feedBacktSlice = createSlice({
    name: 'feedBack',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postFeedBack.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postFeedBack.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(postFeedBack.rejected, (state, action) => {
            state.status = 'failed';
            if(action.payload){
               state.data.message = action.payload
              }
              state.loading = false
          });
    },
 });
 

export const selectFeedBAck = (state) => state.feedBack
export const selectFeedBAckLoading = (state) => state.feedBack.loading

 export const {} = feedBacktSlice.actions

export const feedBackReducer =  feedBacktSlice.reducer