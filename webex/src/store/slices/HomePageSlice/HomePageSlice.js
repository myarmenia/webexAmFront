import { createSlice } from "@reduxjs/toolkit";
import { getHomePage } from "./HomePageApi";

const initialState = {
  data: {
    course_languages: [],
    calculator: {
        projects: {
            id: 0,
            count: 0
        },
        students: {
            id: 1,
            count: 0
        },
    },
    allProjects: []
},
   status: 'idle',
   error: null,
   };

const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getHomePage.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(getHomePage.fulfilled, (state, action) => {
            state.data = action.payload
             state.status = 'succes';
          })
          .addCase(getHomePage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectHomePage = (state) => state.homePage
export const selectToolsCalc = (state) => state.homePage.data.calculator
export const selectProgramingLang = (state) => state.homePage.data.course_languages

 export const {} = homePageSlice.actions

export const homePageReducer =  homePageSlice.reducer