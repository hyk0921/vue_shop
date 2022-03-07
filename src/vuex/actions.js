import { reqAddress,reqShops,reqCategorys,reqAutoLogin ,reqShopGoods,reqShopInfo,reqShopRatings} from "../api"
import { RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_TOKEN,RECEIVE_USER ,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT} from "./mutations-types"
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
    },
    logout({commit}){
        localStorage.removeItem('token_key')
        commit(RECEIVE_USER)
        commit(RECEIVE_TOKEN)
    },
    async getShopGoods({commit}){
        const result = await reqShopGoods()
        if(result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS,goods)
        }
    },
    async getShopRatings({commit}){
        const result = await reqShopRatings()
        if(result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS,ratings)
        }
    },
    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if(result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO,info)
        }
    },
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,food)
        }else{
            commit(REDUCE_FOOD_COUNT,food)
        }
    }
}