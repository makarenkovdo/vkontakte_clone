import axios from "axios";

export const signUpAxios = {
    postAuth(signUpInputData: any): any {
        signUpInputData.returnSecureToken = true
        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signUpInputData)


    },

    postDB(signUpInputData: any): any {

        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${signUpInputData.displayName}.json`, signUpInputData)


    }
}




