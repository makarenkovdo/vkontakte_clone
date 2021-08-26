import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { CreateNewsItem_Axios } from '../CreateNewsItem/CreateNewsItem_Axios';
import { news_getNewsList, news_postNewsItem, news_setError, news_setNewsList } from '../News_Slice';

// Our worker Saga: will perform the async increment task
export function* getNewsItems_SagaWorker({ payload }: any) {
    try {
        const NewsItems: news_GetData_INTF = yield call(CreateNewsItem_Axios.get, payload);
        console.log(NewsItems.data);

        yield put(news_setNewsList(NewsItems.data))
    } catch (error) {
        yield put(news_setError())
    }




}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* GetNewsItems_SagaWatcher() {
    console.log('inside GetNewsItems_SagaWatcher');



    yield takeEvery(news_getNewsList, getNewsItems_SagaWorker)
}