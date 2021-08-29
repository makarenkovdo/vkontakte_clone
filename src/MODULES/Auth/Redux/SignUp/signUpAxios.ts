import axios, { AxiosResponse } from "axios";

export const signUpAxios = {
    postAuth(payload: signUpPostInputsType): Promise<AxiosResponse> {

        payload.payload.returnSecureToken = true
        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', payload.payload)


    },

    postDB(payload: signUpPostInputsType): Promise<AxiosResponse> {

        return axios.put(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload.payload.displayName}.json`, payload.payload)


    }
}




