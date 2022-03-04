import { reqAddress,reqShops,reqCategorys,reqAutoLogin } from "../api"
import { RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_TOKEN,RECEIVE_USER } from "./mutations-types"
export default {
    async getAddress({commit,state}){
        const {longitude,latitude} = state
        const result = await reqAddress(longitude,latitude)
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS,address)
        }
    },
    async getShops({commit,state}){
        const {longitude,latitude} = state
        const result = await reqShops({latitude,longitude})
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS,shops)
        }
    },
    async getCategorys({commit}){
        const result = await reqCategorys()
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,categorys)
        }
    },
    saveUser({commit},user){
        commit(RECEIVE_USER,user)
        const token = user.token
        localStorage.setItem('token_key',token)
        delete user.token
        commit(RECEIVE_TOKEN,token)
    },
    async autoLogin({commit,state}){
        if(state.token && !state.user._id){
            const result = await reqAutoLogin()
            if(result.code === 0){
                const user = result.data
                commit(RECEIVE_USER,user)
            }
        }
    }
}