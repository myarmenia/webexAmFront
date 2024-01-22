import { createSlice } from '@reduxjs/toolkit';
import { getDashboard } from './DashboardApi';

const initialState = {
  DataAll: [],
  loading: true,
  // types: [],
  // typeLoading: false,
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // setType: (state, action) => {
    //   state.types = action.payload;
    // },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(getDashboard.fulfilled, (state, action) => {
        console.log(action.payload, 999999)
        state.DataAll = action.payload
        state.loading = false
      })
      .addCase(getDashboard.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(getDashboard.rejected, (state, action) => {
        console.log("chdarav");
      });
  },
});

// export const {
//   //   setErrorMessage,
// } = currentLessonSlice.actions;

export const getDataAll = (state) => state.dashboard.DataAll;



export const DashboardReducer = DashboardSlice.reducer;




