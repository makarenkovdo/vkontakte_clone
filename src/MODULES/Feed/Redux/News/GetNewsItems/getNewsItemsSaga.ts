import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewsItemAxios } from '../createNewsItem/createNewsItemAxios';
import { news_getNewsList, news_postNewsItem, news_setError, news_setNewsList } from '../newsSlice';

// Our worker Saga: will perform the async increment task
export function* getNewsItemsSagaWorker({ payload }: any) {
    try {
        const NewsItems: news_GetData_INTF = yield call(createNewsItemAxios.get, payload);
        console.log(NewsItems.data);

        yield put(news_setNewsList(NewsItems.data))
    } catch (error) {
        yield put(news_setError())
    }




}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* getNewsItemsSagaWatcher() {
    console.log('inside GetNewsItems_SagaWatcher');



    yield takeEvery(news_getNewsList, getNewsItemsSagaWorker)
}