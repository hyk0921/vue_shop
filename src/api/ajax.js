import axios from "axios"
import qs from "qs"
const instance = axios.create({
    baseURL:"/api",
    timeout:20000
})
instance.interceptors.request.use((config)=>{
    if(config.data instanceof Object){
        config.data = qs.stringify(config.data)
    }
    return config
})
instance.interceptors.response.use(
    response=> {
        return response.data
    },
    error=>{
        alert(error.msg)
        return new Promise(()=>{})
    }
)
export default instance