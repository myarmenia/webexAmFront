import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./LoginApi";

const initialState = {
   data: {
      authUser: {},
      token: ''
   },
   status: 'idle',
   error: null,
   };

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(postLogin.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(postLogin.fulfilled, (state, action) => {
            state.data = action.payload
            console.log(state.data, 5555);
             state.status = 'succes';
          })
          .addCase(postLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
 });
 

export const selectLogin = (state) => state.login

 export const {setLogin} = loginSlice.actions

export const loginReducer =  loginSlice.reducer