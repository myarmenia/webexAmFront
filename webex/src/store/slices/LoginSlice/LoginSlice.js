import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./LoginApi";
import { setAuth } from "../Auth/AuthSlice";

const initialState = {
   data: {
      authUser: {},
      token: ''
   },
   status: 'idle',
   error: null,
   authUser:false
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
             state.status = 'succes';
          })
          .addCase(postLogin.rejected, (state, action) => {
             if(action.payload){
                state.data.message = action.payload
               }
               state.status = 'failed'; 
          });
    },
 });
 

export const selectLogin = (state) => state.login


 export const {setLogin} = loginSlice.actions


export const loginReducer =  loginSlice.reducer