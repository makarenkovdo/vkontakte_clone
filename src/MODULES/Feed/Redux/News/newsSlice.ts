import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState = {
    newsItems: { },
    newsStatus: newsStatusInterface.DISABLE,
    postButtonVisibility: false,

} as interfaceInitialState

const newsSlice = createSlice({
    name: 'newsSliceState',
    initialState,
    reducers: {
        newsSetNewsList(state, action: PayloadAction<any>) {
            console.log('inside newsSetNewsList');
            console.log(action.payload);
            state.newsItems = action.payload

            state.newsStatus = newsStatusInterface.LOADED

        },
        newsSetError(state) {
            state.newsStatus = newsStatusInterface.ERROR
        },
        newsGetNewsList(state, action: PayloadAction<news_GetData_INTF>) {
            state.newsStatus = newsStatusInterface.LOADING
        },
        newsPostNewsItem(state, action: PayloadAction<news_GetData_INTF>) {
            console.log('inside newsPostNewsItemrReducer');
            state.newsStatus = newsStatusInterface.LOADING
        },
        newsPostButtonVisibility(state) {
            state.postButtonVisibility = true
        },
        newsPostButtonVisibilityOff(state) {
            state.postButtonVisibility = false
        },

    }




})



// interface newsSlice_INTF {
//     name: string,

// }

export const { newsSetNewsList, newsSetError, newsGetNewsList, newsPostButtonVisibilityOff, newsPostNewsItem, newsPostButtonVisibility } = newsSlice.actions
export default newsSlice.reducer