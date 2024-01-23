import { createSlice } from '@reduxjs/toolkit';
import { getCurrentLanguageLesson, getCurrentLesson } from './CurrentLessonsApi';

const initialState = {
  allData: [],
  courses: [],
  loading: true,
  // types: [],
  // typeLoading: false,
};

export const currentLessonSlice = createSlice({
  name: 'currentLesson',
  initialState,
  reducers: {
    // setType: (state, action) => {
    //   state.types = action.payload;
    // },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentLesson.fulfilled, (state, action) => {
        console.log(action.payload, 999999)
        state.courses = action.payload.all_courses
        state.allData = action.payload
        state.loading = false
      })
      .addCase(getCurrentLanguageLesson.fulfilled, (state, action) => {
        console.log(action.payload, 999999)
        state.allData = action.payload
        state.loading = false
      })
      .addCase(getCurrentLesson.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(getCurrentLesson.rejected, (state, action) => {
        console.log("chdarav");
      });
  },
});

// export const {
//   //   setErrorMessage,
// } = currentLessonSlice.actions;

export const getAllCourses = (state) => state.currentLesson.courses;
export const getAllData = (state) => state.currentLesson.allData;
export const getLoading = (state) => state.currentLesson.loading;


export const currentLessonReducer = currentLessonSlice.reducer;




