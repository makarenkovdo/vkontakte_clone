import axios from "axios";

export const signUpAxios = {
    postAuth(signUpInputDataArray: Array<any>): any {
        const [email, password, displayName] = signUpInputDataArray

        const signUpInputData = {
            email: email,
            password: password,
            displayName: displayName,
            returnSecureToken: true,

        }
        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signUpInputData)


    },

    postDB(signUpInputDataArray: Array<any>): any {
        const [email, password, displayName] = signUpInputDataArray

        const signUpInputData = {
            email: email,
            password: password,
            displayName: displayName,

        }
        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${signUpInputData.displayName}.json`, signUpInputData)


    }
}




