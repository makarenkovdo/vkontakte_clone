import { all } from "@redux-saga/core/effects";
import { signUpSagaWatcher } from "../../modules/auth/redux/signUp/signUpSaga";
import { signInSagaWatcher } from "../../modules/auth/redux/signIn/signInSaga";
import { getNewsItemsSagaWatcher } from "../../modules/feed/redux/news/getNewsItems/getNewsItemsSaga";
import { createNewsItemSagaWatcher } from "../../modules/feed/redux/news/createNewsItem/createNewsItemSaga";

export default function* rootSaga() {
    console.log('rootSagas');

    yield all(
        [getNewsItemsSagaWatcher(), createNewsItemSagaWatcher(),
        signUpSagaWatcher(), signInSagaWatcher()]
    )
}