import { createSlice } from '@reduxjs/toolkit';
import { getCurrentLanguageLesson, getCurrentLesson } from './CurrentLessonsApi';

const initialState = {
  allData: [],
  courses: [],
  loading: true,
  isCurrentLessonReq : true,
  // types: [],
  // typeLoading: false,
  currentLessonNumber: 0
};

export const currentLessonSlice = createSlice({
  name: 'currentLesson',
  initialState,
  reducers: {
    setIsCurrentLessonReq: (state, action) => {
      state.isCurrentLessonReq = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCurrentLesson.fulfilled, (state, action) => {
        console.log(action.payload, 'ppppppppppppppppppppppp')
        state.courses = action.payload.all_courses
        if(state.isCurrentLessonReq){
          state.allData = action.payload
          state.loading = false
          state.currentLessonNumber = action.payload.current_lesson_number
        }
        state.isCurrentLessonReq = true
      })
      .addCase(getCurrentLanguageLesson.fulfilled, (state, action) => {
        console.log(action.payload, 999999)
        // state.isCurrentLessonReq = true
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

export const {
  setIsCurrentLessonReq,
} = currentLessonSlice.actions;

export const getAllCourses = (state) => state.currentLesson.courses;
export const getAllData = (state) => state.currentLesson.allData;
export const getLoading = (state) => state.currentLesson.loading;
export const getIsCurrentLessonReq = (state) => state.currentLesson.isCurrentLessonReq;
export const getIsCurrentLessonNuber = (state) => state.currentLesson.currentLessonNumber;


export const currentLessonReducer = currentLessonSlice.reducer;




