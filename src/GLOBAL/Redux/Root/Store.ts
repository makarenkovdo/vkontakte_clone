import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { rootReducer } from "./RootReducer";
import rootSaga from './RootSaga';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import SignIn_Slice from '../../../MODULES/Auth/Redux/SignIn/SignIn_Slice';
import News_Slice from '../../../MODULES/Feed/Redux/News/News_Slice';




declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()


// export const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );
export const store = configureStore({
    reducer: {
        signInSlice: SignIn_Slice,
        newsSlice: News_Slice,
    },
    middleware: [sagaMiddleware]

})

sagaMiddleware.run(rootSaga)


// export interface RootState {
// //     posts: PostsState
// // }


export type AppDispatch = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
export const useMyDispatch = () => useDispatch<AppDispatch>()
export const useMySelector: TypedUseSelectorHook<RootStateType> = useSelector


