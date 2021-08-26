import { call, put, takeEvery } from 'redux-saga/effects'
import { SignIn_Axios } from "./SignIn_Axios"
import { signIn_postInputs, signIn_setError, signIn_setSuccess } from './SignIn_Slice';


export function* signIn_SagaWorker({ payload }: any) {
    console.log('inside auSaga_SignInWorker');
    try {
        const response: SignInWorker_response_INTF = yield call(SignIn_Axios.post, payload);
        console.log(response);

        const displayName = response.data.displayName
        localStorage.setItem('displayName', displayName);
        console.log('before the PUT');

        yield put(signIn_setSuccess(displayName))
        // window.location.reload();
        // if (response.token)
        console.log('after the PUT');

    } catch (error) {
        console.log('error');
        put(signIn_setError())

    }
}

export function* SignIn_SagaWatcher() {
    console.log('inside auSaga_SignInWatcher');

    yield takeEvery(signIn_postInputs, signIn_SagaWorker)

}

// export default function* mySaga() {
//     yield [
//       fork(watchFetchFriends),
//       fork(watchCreateUser)
//     ]
//   }