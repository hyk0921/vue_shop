import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import './validate'

Vue.config.productionTip = false
import router from "@/router"
import Header from "@/components/Header/Header"
import Star from "@/components/Star/Star"
import store from "@/vuex/store"
import * as API from "@/api"
Vue.prototype.$API = API
Vue.component("Header",Header)
Vue.component("Star",Star)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
