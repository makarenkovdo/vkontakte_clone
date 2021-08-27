
import { call, put, takeEvery } from 'redux-saga/effects'
import { signUpAxios } from "./signUpAxios";
import { ServerResponse } from "http";
import { signUp_postInputs, signUp_setError, signUp_setSuccess } from './signUpSlice';
function* signUpSagaWorker({ payload }: any) {
    console.log('inside SignUp_SagaWorker');
    try {
        const response: ServerResponse = yield call(signUpAxios.postAuth, payload);
        console.log(response);
        if (response) {
            yield call(SignUp_Axios.postDB, payload);
            put(signUp_setSuccess(payload))
        }

    } catch (error) {
        console.log('error');
        put(signUp_setError())

    }
}

export function* signUpSagaWatcher() {

    yield takeEvery(signUp_postInputs, signUpSagaWorker)

}



