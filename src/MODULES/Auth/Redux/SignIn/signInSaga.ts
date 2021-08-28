import { call, put, takeEvery } from 'redux-saga/effects'
import { signInAxios } from "./signInAxios"
import { signInPostInputs, signInSetError, signInSetSuccess } from './signInSlice';


export function* signInSagaWorker({ payload }: any) {
    console.log(payload);

    interface SignInWorkerResponseType {
        data: {
            displayName: string
        }
    }
    try {
        const response: SignInWorkerResponseType = yield call(signInAxios.post, payload);
        console.log(response);

        const displayName = response.data.displayName
        localStorage.setItem('displayName', displayName);
        yield put(signInSetSuccess(displayName))
    } catch (error) {
        console.log('error');
        put(signInSetError())

    }
}

export function* signInSagaWatcher() {
    console.log('inside auSaga_SignInWatcher');

    yield takeEvery(signInPostInputs, signInSagaWorker)

}

// export default function* mySaga() {
//     yield [
//       fork(watchFetchFriends),
//       fork(watchCreateUser)
//     ]
//   }