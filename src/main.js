// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// $route为当前router跳转对象里面可以获取name、path、query、params等
//
// $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
import Vue from 'vue'
import App from './App'
import {store} from './store/store'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import '../static/assets/mui/css/mui.css'
import '../static/assets/myFont/home/iconfont.css'
import '../static/assets/myFont/cart/iconfont.css'

import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false
Vue.use(Mint)

Axios.defaults.withCredentials = true
// axios不是Vue插件，不能直接use，需要挂载到原形上使用
Vue.prototype.$axios = Axios

// 全局组件
Vue.component('footerVue', Footer)
Vue.component('headerVue', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store放在router前
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
