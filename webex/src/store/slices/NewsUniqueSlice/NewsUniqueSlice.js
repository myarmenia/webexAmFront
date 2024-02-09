import { createSlice } from "@reduxjs/toolkit";
import { getNewsUniquePage } from "./NewsUniqueApi";

const initialState = {
  data: {},
   status: 'idle',
   error: null,
   loading: true, 
   };

const newsUniquePageSlice = createSlice({
    name: 'newsUniquePage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getNewsUniquePage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getNewsUniquePage.fulfilled, (state, action) => {
            
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(getNewsUniquePage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectNewsUniquePage = (state) => state.newsUniquePage
export const selectNewsUniquePageData = (state) => state.newsUniquePage.data
export const selectNewsUniquePageLoading = (state) => state.newsUniquePage.loading

 export const {} = newsUniquePageSlice.actions

export const newsUniquePageReducer =  newsUniquePageSlice.reducer