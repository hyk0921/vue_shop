import { reqAutoLogin } from "@/api"
import { RECEIVE_TOKEN,RECEIVE_USER } from "../mutations-types"
export default {
    state:{
        user:{},
        token:localStorage.getItem('token_key') || '',
    },
    actions:{
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
    },
    mutations:{
        [RECEIVE_TOKEN](state,token=''){
            state.token = token
         },
         [RECEIVE_USER](state,user={}){
            state.user = user
         },
    },
    getters:{
        
    }
}