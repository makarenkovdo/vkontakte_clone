import * as Effects from "redux-saga/effects";
import { put, takeEvery } from 'redux-saga/effects'
import { signUpAxios } from "./signUpAxios";
import { ServerResponse } from "http";
import { signUpPostInputs, signUpSetError, signUpSetSuccess } from './signUpSlice';

const call: any = Effects.call;

function* signUpSagaWorker(payload: signUpPostInputsType) {
    try {
        const response: ServerResponse = yield call(signUpAxios.postAuth, payload);
        if (response) {
            yield call(signUpAxios.postDB, payload);
            put(signUpSetSuccess)
        }

    } catch (error) {
        console.log('SignUp Saga error');
        put(signUpSetError())

    }
}

export function* signUpSagaWatcher() {

    yield takeEvery(signUpPostInputs, signUpSagaWorker)

}



