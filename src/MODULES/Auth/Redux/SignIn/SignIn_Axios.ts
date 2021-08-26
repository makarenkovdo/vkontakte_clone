import axios from "axios";
import { useMySelector } from "../../../../GLOBAL/Redux/Root/Store";

// const SignUpInputData = useMySelector(AuInitState => AuInitState.auth.SignUpInputs)
//это всё ПРИЁМ данных с БД

export const SignIn_Axios = {
    post(SignInInputDataArray: Array<any>): any {
        console.log('inside axios-signin');

        const SignInInputData = {
            email: SignInInputDataArray[0],
            password: SignInInputDataArray[1],
            returnSecureToken: true,

        }
        console.log(SignInInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', SignInInputData)


    }
}


