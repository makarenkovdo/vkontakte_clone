import { all } from "@redux-saga/core/effects";
import { SignUp_SagaWatcher } from "../../../MODULES/Auth/Redux/SignUp/SignUp_Saga";
import { SignIn_SagaWatcher } from "../../../MODULES/Auth/Redux/SignIn/SignIn_Saga";
import { GetNewsItems_SagaWatcher } from "../../../MODULES/Feed/Redux/News/GetNewsItems/GetNewsItems_Saga";
import { CreateNewsItem_SagaWatcher } from "../../../MODULES/Feed/Redux/News/CreateNewsItem/CreateNewsItem_Saga";

export default function* rootSaga() {
    console.log('rootSagas');

    yield all(
        [GetNewsItems_SagaWatcher(), CreateNewsItem_SagaWatcher(),
        SignUp_SagaWatcher(), SignIn_SagaWatcher()]
    )
}