import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "../../../axios";

export const postLogin = createAsyncThunk(
    'login/postLogin',
    async function (body) {
        const {data} = await customAxios.post('/api/auth/login', body)
        console.log(data);
        return data
        
    }
)