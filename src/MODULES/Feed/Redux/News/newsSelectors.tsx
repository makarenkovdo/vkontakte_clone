import { RootStateType } from '../../../../global/rootRedux/store'


export const selectorNewsItems = (state: RootStateType) => state.newsSlice.newsItems
export const selectorNewsLoadingStatus = (state: RootStateType) => state.newsSlice.newsStatus