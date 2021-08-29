import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewsItemAxios } from '../createNewsItem/createNewsItemAxios';
import { newsGetNewsList, newsSetError, newsSetNewsList } from '../newsSlice';

// Our worker Saga: will perform the async increment task

export function* getNewsItemsSagaWorker(payload: getNewsItemsSagaWorkerPayloadType) {
    console.log(typeof payload);

    try {
        const NewsItems: AxiosResponse = yield call(createNewsItemAxios.get, payload.payload);
        console.log(NewsItems);

        yield put(newsSetNewsList(NewsItems.data))
    } catch (error) {
        yield put(newsSetError())
    }




}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* getNewsItemsSagaWatcher() {
    yield takeEvery(newsGetNewsList, getNewsItemsSagaWorker)
}