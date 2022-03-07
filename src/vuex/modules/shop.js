import {reqShopGoods,reqShopInfo,reqShopRatings} from "@/api"
import {RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT} from "../mutations-types"
import Vue from "vue";
export default {
    state:{
        goods:[],
        info:{},
        ratings:[]
    },
    actions:{
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
    },
    mutations:{
        
        [RECEIVE_GOODS](state,goods){
            state.goods = goods
        },
        [RECEIVE_INFO](state,info){
            state.info = info
        },
        [RECEIVE_RATINGS](state,ratings){
            state.ratings = ratings
        },
        [ADD_FOOD_COUNT](state,food){
            if(food.count){
            food.count++
            }else{
            Vue.set(food,'count',1)
            }
        },
        [REDUCE_FOOD_COUNT](state,food){
            if(food.count>0){
            food.count--
            }
        },
    },
    getters:{
        
    }
}