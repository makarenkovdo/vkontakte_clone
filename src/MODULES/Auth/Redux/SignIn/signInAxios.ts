import axios from "axios";
import { useMySelector } from "../../../../global/rootRedux/store";

// const SignUpInputData = useMySelector(AuInitState => AuInitState.auth.SignUpInputs)
//это всё ПРИЁМ данных с БД

export const signInAxios = {
    post(signInInputDataArray: Array<any>): any {
        console.log('inside axios-signIn');

        const signInInputData = {
            email: signInInputDataArray[0],
            password: signInInputDataArray[1],
            returnSecureToken: true,

        }
        console.log(signInInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signInInputData)


    }
}


