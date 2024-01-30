import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../axios";
import { setAuth } from "../Auth/AuthSlice";

export const postLogin = createAsyncThunk(
    'login/postLogin',
    // async function (body) {
    //     const {data} = await instance.post('/api/auth/login', body)
    //     console.log(data);
    //     return data
        
    // }


    async (body, thunkAPI) => {
        try {
          const signInData = {
            email: body.email,
            password: body.password,
          };
    
          const config = {
            method: "post",
            url: "auth/login",
            data: signInData,
          };
    
          const response = await instance(config);
          sessionStorage.setItem("token", response.data.access_token);
          sessionStorage.setItem("isAuth", true);
          
          return response?.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error);
        }
      }
)