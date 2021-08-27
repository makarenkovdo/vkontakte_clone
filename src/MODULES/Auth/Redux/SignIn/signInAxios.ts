import axios from "axios";
import { useMySelector } from "../../../../global/rootRedux/store";

// const SignUpInputData = useMySelector(AuInitState => AuInitState.auth.SignUpInputs)
//это всё ПРИЁМ данных с БД

export const signinAxios = {
    post(signinInputDataArray: Array<any>): any {
        console.log('inside axios-signin');

        const signinInputData = {
            email: signinInputDataArray[0],
            password: signinInputDataArray[1],
            returnSecureToken: true,

        }
        console.log(signinInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signinWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signinInputData)


    }
}


