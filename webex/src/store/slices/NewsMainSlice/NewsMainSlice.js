import { createSlice } from "@reduxjs/toolkit";
import { getNewsMainPage } from "./NewsMainApi";

const initialState = {
  data: [],
   status: 'idle',
   error: null,
   loading: true, 
   };

const newsMainPageSlice = createSlice({
    name: 'newsMainPage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getNewsMainPage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getNewsMainPage.fulfilled, (state, action) => {
            
            state.data = action.payload
            state.loading = false
             state.status = 'succes';
          })
          .addCase(getNewsMainPage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectNewsMainPage = (state) => state.newsMainPage
export const selectNewsMainPageData = (state) => state.newsMainPage.data
export const selectNewsMainPageLoading = (state) => state.newsMainPage.loading

 export const {} = newsMainPageSlice.actions

export const newsMainPageReducer =  newsMainPageSlice.reducer