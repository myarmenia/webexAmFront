import { createSlice } from '@reduxjs/toolkit';
import { getCurrentLesson } from './CurrentLessonsApi';

const initialState = {
  types: [],
  typeLoading: false,
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
        console.log("verj")
      })
      .addCase(getCurrentLesson.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(getCurrentLesson.rejected, (state, action) => {
      });
  },
});

// export const {
//   //   setErrorMessage,
// } = currentLessonSlice.actions;

// export const getAllType = (state) => state.adminType.types;

export const currentLessonReducer = currentLessonSlice.reducer;
