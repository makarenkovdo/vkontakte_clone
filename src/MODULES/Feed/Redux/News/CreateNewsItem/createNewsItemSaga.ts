import { call, put, takeEvery } from 'redux-saga/effects'
import { newsPostNewsItem, newsSetError, newsSetNewsList } from '../newsSlice';
import { createNewsItemAxios } from './createNewsItemAxios'

// Our worker Saga: will perform the async increment task
function* createNewsItemSagaWorker({ payload }: any) {
    //была ошибка, пришлось самому вот это делать: const data: Promise<PostsState['items']>
    try {
        yield call(createNewsItemAxios.post, payload);
        const NewsItems: news_GetData_INTF = yield call(createNewsItemAxios.get, payload);
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