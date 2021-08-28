import axios from "axios";
export const signInAxios = {
    post(signInInputData: any): any {
        signInInputData.returnSecureToken = true

        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', signInInputData)



    }
}


