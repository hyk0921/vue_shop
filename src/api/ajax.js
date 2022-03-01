import axios from "axios"
import qs from "qs"
import { Indicator } from 'mint-ui';
const instance = axios.create({
    baseURL:"/api",
    timeout:20000
})
instance.interceptors.request.use((config)=>{
    Indicator.open();
    if(config.data instanceof Object){
        config.data = qs.stringify(config.data)
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