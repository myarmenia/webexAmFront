import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postOrder = createAsyncThunk(
    'order/postOrder',

    async (body, thunkAPI) => {
        try {
          const orderData = {
            name: body.name,
            phone: body.phone,
            email: body.email,
            comment: body.comment,
            checkBoxArr: body.checkboxArr
          };
          
          console.log(orderData);
          const config = {
            method: "post",
            url: "/send-order",
            data: orderData,
          };
    
          const response = await instance(config);
          
          return response?.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data.error.both);
        }
      }
)