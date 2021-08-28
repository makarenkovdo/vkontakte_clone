import axios from "axios";

//это всё ПРИЁМ данных с БД
export const createNewsItemAxios = {
    post(payload: any) {
        axios.post(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload[0]}/newsitems.json`, payload[1])


    },
    get(payload: any) {
        console.log(payload[0]);
        return axios.get(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload[0]}/newsitems.json`)


    }
}