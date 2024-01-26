import { createSlice } from '@reduxjs/toolkit';
import { getVisitHistory } from './VisitHistoryApi';


const initialState = {
  AllVisitDate: [],
  loading: true,
  // types: [],
  // typeLoading: false,
};

export const VisitHistorySlice = createSlice({
  name: 'visithistory',
  initialState,
  reducers: {
    // setType: (state, action) => {
    //   state.types = action.payload;
    // },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getVisitHistory.fulfilled, (state, action) => {
        state.AllVisitDate = action.payload
        state.loading = false
      })
      .addCase(getVisitHistory.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(getVisitHistory.rejected, (state, action) => {
        console.log("chdarav");
      });
  },
});

// export const {
//   //   setErrorMessage,
// } = currentLessonSlice.actions;

export const getAllVisitDate = (state) => state.visithistory.AllVisitDate;
export const getLoadingVisitHistory = (state) => state.visithistory.loading;



export const VisitHistoryReducer = VisitHistorySlice.reducer;




