import { compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import SignInSlice from '../../modules/auth/redux/signIn/signInSlice';
import newsSlice from '../../modules/feed/redux/news/newsSlice';

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}




export const store = configureStore({
    reducer: {
        signInSlice: SignInSlice,
        newsSlice: newsSlice,
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
export const useMyDispatch = () => useDispatch<AppDispatch>()
export const useMySelector: TypedUseSelectorHook<RootStateType> = useSelector


