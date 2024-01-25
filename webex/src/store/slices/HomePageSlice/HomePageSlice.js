import { createSlice } from "@reduxjs/toolkit";
import { getHomePage } from "./HomePageApi";

const initialState = {
  data: {
    course_languages: [],
    calculator: {
        projects: {
            
        },
        students: {
           
        },
    },
    all_projects: []
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
export const selectallProjects = (state) => state.homePage.data.all_projects

 export const {} = homePageSlice.actions

export const homePageReducer =  homePageSlice.reducer