import { RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS} from "../mutations-types"
import { reqAddress,reqShops,reqCategorys} from "@/api"
export default {
    state:{
        latitude:40.10038,
        longitude:116.36867,
        address:{},
        categorys:[],
        shops:[],
    },
    actions:{
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
    },
    mutations:{
        [RECEIVE_ADDRESS](state,address){
            state.address = address
         },
         [RECEIVE_SHOPS](state,shops){
            state.shops = shops
         },
         [RECEIVE_CATEGORYS](state,categorys){
            state.categorys = categorys
         },
    },
    getters:{

    }
}