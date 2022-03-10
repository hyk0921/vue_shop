import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import './validate'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
import router from "@/router"
import Header from "@/components/Header/Header"
import Star from "@/components/Star/Star"
import CartControl from "@/components/CartControl/CartControl"
import Split from "@/components/Split/Split";
import store from "@/vuex/store"
import * as API from "@/api"
import { Button } from 'mint-ui';
import i18n from './i18n'
import loading from '@/common/images/loading.gif'
import './mock/mockServe'
import './filters'
Vue.use(VueLazyload, {
  loading,  
}) // 内部定义一个全局指令: lazy

Vue.component(Button.name, Button);
Vue.prototype.$API = API
Vue.component("Header",Header)
Vue.component("Star",Star)
Vue.component("CartControl",CartControl)
Vue.component("Split",Split)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  i18n,
  store
}).$mount('#app')
