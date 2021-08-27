import axios from "axios";
export const signUpAxios = {
    postAuth(signUpInputDataArray: Array<any>): any {
        console.log('inside axios');

        const signUpInputData = {
            email: signUpInputDataArray[0],
            password: signUpInputDataArray[1],
            displayName: signUpInputDataArray[2],
            returnSecureToken: true,

        }
        console.log(signUpInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signUpInputData)


    },
    postDB(signUpInputDataArray: Array<any>): any {
        console.log('inside axios');

        const signUpInputData = {
            email: signUpInputDataArray[0],
            password: signUpInputDataArray[1],
            displayName: signUpInputDataArray[2],

        }
        console.log(signUpInputData);
        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${signUpInputData.displayName}.json`, signUpInputData)


    }
}




