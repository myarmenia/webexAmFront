import { createSlice } from "@reduxjs/toolkit";
import { postTrialCourse } from "./TrialCourseApi";

const initialState = {
   massage: '',
   status: 'idle',
   error: null,
   };

const trialCourseSlice = createSlice({
    name: 'trialCourse',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postTrialCourse.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postTrialCourse.fulfilled, (state, action) => {
            state.massage = action.payload.success
             state.status = 'succes';
          })
          .addCase(postTrialCourse.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectTrialCourse = (state) => state.trialCourse

 export const {} = trialCourseSlice.actions

export const trialCourseReducer =  trialCourseSlice.reducer