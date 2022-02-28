import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'

Vue.config.productionTip = false
import router from "@/router"
import Header from "@/components/Header/Header"
import store from "@/vuex/store"
Vue.component("Header",Header)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
