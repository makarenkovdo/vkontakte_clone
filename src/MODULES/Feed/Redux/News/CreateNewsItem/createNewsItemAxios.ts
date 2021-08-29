import axios from "axios";

//это всё ПРИЁМ данных с БД

export const createNewsItemAxios = {

    post(payload: newsPostNewsItemType) {
        console.log(payload.payload.username);

        return axios.post(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload.payload.username}/newsitems.json`, payload.payload.postData)


    },
    get(payload: string) {
        console.log(payload);

        return axios.get(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload}/newsitems.json`)


    }
}