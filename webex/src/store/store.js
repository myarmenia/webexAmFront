import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/LoginSlice/LoginSlice";
import { registerReducer } from "./slices/RegisterSlice/RegisterSlice";
import { resetPasswordReducer } from "./slices/ResetEmailSlice/ResetEmailSlice";
import { resetPasswordPageReducer } from "./slices/PasswordResetPageSlice/PasswordResetPageSlice";
import { newPasswordReducer } from "./slices/NewPasswordeSlise/NewPasswordeSlise";
import { trialCourseReducer } from "./slices/TrialCourseSlice/TrialCourseSlice";
import { currentLessonReducer } from './slices/CurrentLessons/CurrentLessonsSlice';

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        resetPassword: resetPasswordReducer,
        resetPasswordPage: resetPasswordPageReducer,
        newPassword: newPasswordReducer,
        trialCourse: trialCourseReducer,
        currentLesson: currentLessonReducer,

    },
    // middleware: (getDefaultMiddlware)=>[
    //     ...getDefaultMiddlware(),
        
    // ]
});

export default store;
