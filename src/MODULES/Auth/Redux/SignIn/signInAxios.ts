import axios from "axios";
export const signInAxios = {
    post(signInInputDataArray: Array<any>): any {
        const [email, password] = signInInputDataArray

        const signInInputData = {
            email: email,
            password: password,
            returnSecureToken: true,

        }

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signInInputData)


    }
}


