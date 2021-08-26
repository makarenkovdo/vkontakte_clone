import axios from "axios";
import { useMySelector } from "../../../../GLOBAL/Redux/Root/Store";

export const SignUp_Axios = {
    postAuth(SignUpInputDataArray: Array<any>): any {
        console.log('inside axios');

        const SignUpInputData = {
            email: SignUpInputDataArray[0],
            password: SignUpInputDataArray[1],
            displayName: SignUpInputDataArray[2],
            returnSecureToken: true,

        }
        console.log(SignUpInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', SignUpInputData)


    },
    postDB(SignUpInputDataArray: Array<any>): any {
        console.log('inside axios');

        const SignUpInputData = {
            email: SignUpInputDataArray[0],
            password: SignUpInputDataArray[1],
            displayName: SignUpInputDataArray[2],

        }
        console.log(SignUpInputData);
        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${SignUpInputData.displayName}.json`, SignUpInputData)


    }
}




