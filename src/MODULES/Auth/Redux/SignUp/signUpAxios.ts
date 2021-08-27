import axios from "axios";
export const signupAxios = {
    postAuth(signupInputDataArray: Array<any>): any {
        console.log('inside axios');

        const signupInputData = {
            email: signupInputDataArray[0],
            password: signupInputDataArray[1],
            displayName: signupInputDataArray[2],
            returnSecureToken: true,

        }
        console.log(signupInputData);

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signup?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signupInputData)


    },
    postDB(signupInputDataArray: Array<any>): any {
        console.log('inside axios');

        const signupInputData = {
            email: signupInputDataArray[0],
            password: signupInputDataArray[1],
            displayName: signupInputDataArray[2],

        }
        console.log(signupInputData);
        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${signupInputData.displayName}.json`, signupInputData)


    }
}




