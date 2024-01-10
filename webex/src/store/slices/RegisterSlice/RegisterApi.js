import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../../axios";

export const postRegister = createAsyncThunk(
    'register/postregister',

    async (body, thunkAPI) => {
        try {
          const registerData = {
            phone: body.phone,
            name: body.name,
            email: body.email,
            password: body.password,
            password_confirmation: body.confirmPassword
          };
          
          console.log(registerData);
          const config = {
            method: "post",
            url: "auth/signup",
            data: registerData,
          };
    
          const response = await customAxios(config);
          sessionStorage.setItem("token", response.data.access_token);
          window.location.href ='/users';
          return true;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)