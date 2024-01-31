import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "./OrderApi";

const initialState = {
   data: {
      success: false,
      message: ""
   },
   status: 'idle',
   error: null,
   loading: true,
   };

const ordertSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postOrder.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postOrder.fulfilled, (state, action) => {
            state.data = action.payload
            // console.log(state.data);
             state.status = 'succes';
             state.loading = false
          })
          .addCase(postOrder.rejected, (state, action) => {
            state.status = 'failed';
            if(action.payload){
               state.data.message = action.payload
              }
              state.loading = false
          });
    },
 });
 

export const selectOrder = (state) => state.order
export const selectOrderLoading = (state) => state.order.loading

 export const {} = ordertSlice.actions

export const orderReducer =  ordertSlice.reducer