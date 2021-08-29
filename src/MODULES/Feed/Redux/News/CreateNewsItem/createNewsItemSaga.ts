import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { newsPostNewsItem, newsSetError, newsSetNewsList } from '../newsSlice';
import { createNewsItemAxios } from './createNewsItemAxios'

// Our worker Saga: will perform the async increment task
// interface postDataType {
//     text: string,
//     date: string,
//     image: string,
// }
function* createNewsItemSagaWorker(payload: newsPostNewsItemType) {
    console.log(payload);

    try {
        yield call(createNewsItemAxios.post, payload);
        const NewsItems: AxiosResponse = yield call(createNewsItemAxios.get, payload.payload.username);
        console.log(NewsItems.data);

        yield put(newsSetNewsList(NewsItems.data))
    } catch (error) {
        yield put(newsSetError())
    }



}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* createNewsItemSagaWatcher() {


    yield takeEvery(newsPostNewsItem, createNewsItemSagaWorker)
}