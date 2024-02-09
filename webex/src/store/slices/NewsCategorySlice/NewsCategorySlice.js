import { createSlice } from "@reduxjs/toolkit";
import { getNewsCategoryPage } from "./NewsCategoryApi";

const initialState = {
  data: {},
   status: 'idle',
   error: null,
   loading: true, 
   };

const newsCategoryPageSlice = createSlice({
    name: 'newsCategoryPage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getNewsCategoryPage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getNewsCategoryPage.fulfilled, (state, action) => {
            
            state.data = action.payload
            console.log(state.data,'ayoooo');
            state.loading = false
             state.status = 'succes';
          })
          .addCase(getNewsCategoryPage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            state.loading = false
          });
    },
 });
 

export const selectNewsCategoryPage = (state) => state.newsCategoryPage
export const selectNewsCategoryPageData = (state) => state.newsCategoryPage.data
export const selectNewsCategoryPageLoading = (state) => state.newsCategoryPage.loading

 export const {} = newsCategoryPageSlice.actions

export const newsCategoryPageReducer =  newsCategoryPageSlice.reducer