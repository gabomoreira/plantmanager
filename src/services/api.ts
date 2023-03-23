import axios from "axios";

const api = axios.create({
    baseURL: `http://192.168.149.153:9999`
})

export default api