import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { news_getNewsList, news_postNewsItem, news_setError, news_setNewsList } from '../News_Slice';
import { CreateNewsItem_Axios } from './CreateNewsItem_Axios'

// Our worker Saga: will perform the async increment task
function* createNewsItem_SagaWorker({ payload }: any) {
    //была ошибка, пришлось самому вот это делать: const data: Promise<PostsState['items']>
    try {
        const NewsItem: news_GetData_INTF = yield call(CreateNewsItem_Axios.post, payload);
        const NewsItems: news_GetData_INTF = yield call(CreateNewsItem_Axios.get, payload);
        console.log(NewsItems.data);

        yield put(news_setNewsList(NewsItems.data))
    } catch (error) {
        yield put(news_setError())
    }



}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* CreateNewsItem_SagaWatcher() {


    yield takeEvery(news_postNewsItem, createNewsItem_SagaWorker)
}