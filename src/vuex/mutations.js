import { RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_TOKEN,RECEIVE_USER ,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT} from "./mutations-types"
import Vue from "vue";
export default {
 [RECEIVE_ADDRESS](state,address){
    state.address = address
 },
 [RECEIVE_SHOPS](state,shops){
    state.shops = shops
 },
 [RECEIVE_CATEGORYS](state,categorys){
    state.categorys = categorys
 },
 [RECEIVE_TOKEN](state,token=''){
    state.token = token
 },
 [RECEIVE_USER](state,user={}){
    state.user = user
 },
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
}