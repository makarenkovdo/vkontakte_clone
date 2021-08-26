
import { call, put, takeEvery } from 'redux-saga/effects'
import { SignUp_Axios } from "./SignUp_Axios";
import { ServerResponse } from "http";
import { signUp_postInputs, signUp_setError, signUp_setSuccess } from './SignUp_Slice';



function* signUp_sagaWorker({ payload }: any) {
    console.log('inside SignUp_SagaWorker');
    try {
        const response: ServerResponse = yield call(SignUp_Axios.postAuth, payload);
        console.log(response);
        if (response) {
            const response: ServerResponse = yield call(SignUp_Axios.postDB, payload);
            put(signUp_setSuccess(payload))
        }

    } catch (error) {
        console.log('error');
        put(signUp_setError())

    }
}

export function* SignUp_SagaWatcher() {

    yield takeEvery(signUp_postInputs, signUp_sagaWorker)

}



