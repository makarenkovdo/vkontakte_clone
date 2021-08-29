import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
export const newsPostNewsItem = createAction<newsPostNewsItemPayloadObjectType>('newsPostNewsItem')
export enum newsStatusInterface {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    DISABLE = 'DISABLE',
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
        newsSetNewsList(state, action: PayloadAction<interfaceNewsItems>) {
            state.newsItems = action.payload

            state.newsStatus = newsStatusInterface.LOADED

        },
        newsSetError(state) {
            state.newsStatus = newsStatusInterface.ERROR
        },
        newsGetNewsList(state, action: PayloadAction<string>) {
            state.newsStatus = newsStatusInterface.LOADING
        },
        newsPostNewsItem(state, action: PayloadAction<newsGetDataPayloadType>) {
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

export const { newsSetNewsList, newsSetError, newsGetNewsList, newsPostButtonVisibilityOff, newsPostButtonVisibility } = newsSlice.actions
export default newsSlice.reducer