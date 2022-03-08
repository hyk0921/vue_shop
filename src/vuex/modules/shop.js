import {reqShopGoods,reqShopInfo,reqShopRatings} from "@/api"
import {RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT,CLEAR_CART} from "../mutations-types"
import Vue from "vue";
export default {
    state:{
        goods:[],
        info:{},
        ratings:[],
        cartFoods: [], // 购物车所有food的数组
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
            state.cartFoods.push(food)
          }
        },
        [REDUCE_FOOD_COUNT](state,food){
          if(food.count>0){
            food.count--
            if(food.count ===0){
              state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
          }
        },
        [CLEAR_CART] (state) {
          // 删除购物车中所有food的count属性
          state.cartFoods.forEach(food => {
            food.count = 0
            // delete food.count
          })
          // 清除购物车数组中的foods
          state.cartFoods = []
        } 
    },
    getters:{
      totalCount (state) {
        return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
      },
      totalPrice (state) {
        return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
      },
    }
}