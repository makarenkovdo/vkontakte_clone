import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RootStateType } from "../../../../GLOBAL/Redux/Root/Store";
// export const selectNewsItems: Array<any> = (state: RootStateType) => state.newsSlice.newsItems

export enum newsStatusInterface {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    DISABLE = 'DISABLE',
}


//
interface interfaceInitialState {
    newsItems: interfaceNewsItems,
    newsStatus: newsStatusInterface,
    postButtonVisibility: boolean
}
interface interfaceNewsItems {
    [key: string]: interfaceNewsItemsData
}
interface interfaceNewsItemsData {
    date: string,
    image: string,
    text: string,
}
//


const initialState = {
    newsItems: {},
    newsStatus: newsStatusInterface.DISABLE,
    postButtonVisibility: false,

} as interfaceInitialState

const news_Slice = createSlice({
    name: 'news_SliceState',
    initialState,
    reducers: {
        news_setNewsList(state, action: PayloadAction<any>) {
            console.log('inside news_setNewsList');
            console.log(action.payload);
            state.newsItems = action.payload

            state.newsStatus = newsStatusInterface.LOADED

        },
        news_setError(state) {
            state.newsStatus = newsStatusInterface.ERROR
        },
        news_getNewsList(state, action: PayloadAction<news_GetData_INTF>) {
            state.newsStatus = newsStatusInterface.LOADING
        },
        news_postNewsItem(state, action: PayloadAction<news_GetData_INTF>) {
            console.log('inside news_postNewsItemrReducer');
            state.newsStatus = newsStatusInterface.LOADING
        },
        news_postButtonVisibility(state) {
            state.postButtonVisibility = true
        },
        news_postButtonVisibilityOff(state) {
            state.postButtonVisibility = false
        },

    }




})



// interface news_Slice_INTF {
//     name: string,

// }

export const { news_setNewsList, news_setError, news_getNewsList, news_postButtonVisibilityOff, news_postNewsItem, news_postButtonVisibility } = news_Slice.actions
export default news_Slice.reducer