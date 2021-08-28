import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewsItemAxios } from '../createNewsItem/createNewsItemAxios';
import { newsGetNewsList, newsSetError, newsSetNewsList } from '../newsSlice';

// Our worker Saga: will perform the async increment task
export function* getNewsItemsSagaWorker({ payload }: any) {
    try {
        const NewsItems: news_GetData_INTF = yield call(createNewsItemAxios.get, payload);
        console.log(NewsItems.data);

        yield put(newsSetNewsList(NewsItems.data))
    } catch (error) {
        yield put(newsSetError())
    }




}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* getNewsItemsSagaWatcher() {
    console.log('inside GetNewsItemsSagaWatcher');



    yield takeEvery(newsGetNewsList, getNewsItemsSagaWorker)
}