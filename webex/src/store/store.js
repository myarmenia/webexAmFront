import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/LoginSlice/LoginSlice";
import { registerReducer } from "./slices/RegisterSlice/RegisterSlice";
import { resetPasswordReducer } from "./slices/ResetEmailSlice/ResetEmailSlice";
import { resetPasswordPageReducer } from "./slices/PasswordResetPageSlice/PasswordResetPageSlice";
import { newPasswordReducer } from "./slices/NewPasswordeSlise/NewPasswordeSlise";
import { trialCourseReducer } from "./slices/TrialCourseSlice/TrialCourseSlice";
import { verifyAccountReducer } from "./slices/VerifyAccountSlice/VerifyAccountSlice";
import { currentLessonReducer } from './slices/CurrentLessons/CurrentLessonsSlice';
import { orderReducer } from "./slices/OrderSlice/OrderSlice";
import { DashboardReducer } from "./slices/Dashboard/DashboardSlice";
import { homePageReducer } from "./slices/HomePageSlice/HomePageSlice";
import { authReduser } from "./slices/Auth/AuthSlice";
import { projectPageReducer } from "./slices/ProjectPageSlice/ProjectPageSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        resetPassword: resetPasswordReducer,
        resetPasswordPage: resetPasswordPageReducer,
        newPassword: newPasswordReducer,
        trialCourse: trialCourseReducer,
        verifyAccount: verifyAccountReducer,
        currentLesson: currentLessonReducer,
        order: orderReducer,
        dashboard : DashboardReducer,
        homePage: homePageReducer,
        auth: authReduser,
        projectPage: projectPageReducer

    },
    // middleware: (getDefaultMiddlware)=>[
    //     ...getDefaultMiddlware(),
        
    // ]
});

export default store;
