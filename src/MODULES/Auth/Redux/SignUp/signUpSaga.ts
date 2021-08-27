
import { call, put, takeEvery } from 'redux-saga/effects'
import { signUpAxios } from "./signUpAxios";
import { ServerResponse } from "http";
import { signUpPostInputs, signUpSetError, signUpSetSuccess } from './signUpSlice';
function* signUpSagaWorker({ payload }: any) {
    console.log('inside SignUpSagaWorker');
    try {
        const response: ServerResponse = yield call(signUpAxios.postAuth, payload);
        console.log(response);
        if (response) {
            yield call(signUpAxios.postDB, payload);
            put(signUpSetSuccess(payload))
        }

    } catch (error) {
        console.log('error');
        put(signUpSetError())

    }
}

export function* signUpSagaWatcher() {

    yield takeEvery(signUpPostInputs, signUpSagaWorker)

}



