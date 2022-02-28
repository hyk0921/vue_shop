import { reqAddress,reqShops,reqCategorys } from "../api"
import { RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS } from "./mutations-types"
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
}