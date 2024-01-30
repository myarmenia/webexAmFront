import { createSlice } from '@reduxjs/toolkit';
import { sendClientQuestion } from './HelpApi';


const initialState = {
  message: "",
  loading : false
};

export const ClientQuestionSlice = createSlice({
  name: 'clientquestion',
  initialState,
  reducers: {
    // setIsCurrentLessonReq: (state, action) => {
    //   state.isCurrentLessonReq = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendClientQuestion.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.loading = false
      })
      .addCase(sendClientQuestion.pending, (state, action) => {
        state.loading = true
        console.log("pending")
      })
      .addCase(sendClientQuestion.rejected, (state, action) => {
        state.loading = false
        console.log("chdarav");
      });
  },
});

// export const {
//   setIsCurrentLessonReq
// } = currentLessonSlice.actions;

export const getMessage = (state) => state.clientquestion.message;



export const clientQuestionReducer = ClientQuestionSlice.reducer;




