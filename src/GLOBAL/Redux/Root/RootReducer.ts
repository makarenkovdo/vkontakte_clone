import { combineReducers } from "redux";
import SignIn_Slice from "../../../MODULES/Auth/Redux/SignIn/SignIn_Slice";
import News_Slice from "../../../MODULES/Feed/Redux/News/News_Slice";
import { configureStore } from '@reduxjs/toolkit'

// export const rootReducer = combineReducers({
//     signInSlice: SignIn_Slice,
//     newsSlice: News_Slice,


// });

export const store = configureStore({
    reducer: {
        signInSlice: SignIn_Slice,
        newsSlice: News_Slice,
    },
})