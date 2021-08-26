import axios from "axios";

//это всё ПРИЁМ данных с БД
export const CreateNewsItem_Axios = {
    post(payload: any) {
        const newPostData = {
            sdf: 'asdasd'
        }
        console.log(payload[1]);

        let data = {}
        return data = axios.post(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload[0]}/newsitems.json`, payload[1])
        console.log(data);


    },
    get(payload: any) {
        console.log(payload[0]);

        return axios.get(`https://vk-proj-dae58-default-rtdb.firebaseio.com/${payload[0]}/newsitems.json`)


    }
}