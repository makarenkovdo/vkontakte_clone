import * as Effects from "redux-saga/effects";
import { put, takeEvery } from 'redux-saga/effects'
import { signInAxios } from "./signInAxios"
import { signInPostInputs, signInSetError, signInSetSuccess } from './signInSlice';

const call: any = Effects.call;


export function* signInSagaWorker(payload: signInPostInputsType) {
    interface SignInWorkerResponseType {
        data: {
            displayName: string
        }
    }
    try {
        const response: SignInWorkerResponseType = yield call(signInAxios.post, payload);
        const displayName = response.data.displayName
        localStorage.setItem('displayName', displayName);
        yield put(signInSetSuccess(displayName))
    } catch (error) {
        put(signInSetError())

    }
}

export function* signInSagaWatcher() {
    yield takeEvery(signInPostInputs, signInSagaWorker)
}

// export default function* mySaga() {
//     yield [
//       fork(watchFetchFriends),
//       fork(watchCreateUser)
//     ]
//   }