import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'

Vue.config.productionTip = false
import router from "@/router"
import Header from "@/components/Header/Header"
Vue.component("Header",Header)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
