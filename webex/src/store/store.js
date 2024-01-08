import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/LoginSlice/LoginSlice";
const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    // middleware: (getDefaultMiddlware)=>[
    //     ...getDefaultMiddlware(),
        
    // ]
})


export default store