import axios from "axios"
import qs from "qs"
import { Indicator } from 'mint-ui';
import store from "@/vuex/store"
const instance = axios.create({
    baseURL:"/api",
    timeout:20000
})
instance.interceptors.request.use((config)=>{
    Indicator.open();
    if(config.data instanceof Object){
        config.data = qs.stringify(config.data)
    }
    const token = store.state.token
    if(token){
        config.headers.Autorization = token
        console.log(11);
    }
    return config
})
instance.interceptors.response.use(
    response=> {
        Indicator.close();
        return response.data
    },
    error=>{
        Indicator.close();
        alert(error.msg)
        return new Promise(()=>{})
    }
)
export default instance