import axios, { AxiosResponse } from "axios";

export const signInAxios = {
    post(payload: signInPostInputsType): Promise<AxiosResponse> {
        payload.payload.returnSecureToken = true



        return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChKgEpaNreEua16dDDYmKWiNdikE2YD9A', payload.payload)



    }
}


