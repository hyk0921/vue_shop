import axios from "axios"
import qs from "qs"
import { Indicator,Toast,MessageBox } from 'mint-ui';
import store from "@/vuex/store"
import router from "@/router";
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
        config.headers['Authorization'] = token
    }else {
        const needCheck = config.headers.needCheck
        if(needCheck){
            throw new Error("您未登录,请先登录")
        }
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
        const response = error.response
        if(!response){
            if(router.currentRoute.path === '/login') return
            router.replace('/login')
            Toast(error.message)
        }else {
            if(error.response.status === 401){
                if(router.currentRoute.path === '/login') return
                router.replace('/login') 
                Toast(error.response.data.message || '登录失效,请重新登录')
                store.dispatch("logout")
            }else if(error.response.status === 404){
                MessageBox('提示','请求资源不存在')
            }else{
                MessageBox('提示','请求出错'+error.msg)
            }
        }
        
        return new Promise(()=>{})
    }
)
export default instance