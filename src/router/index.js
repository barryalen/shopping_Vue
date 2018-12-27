import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Users from '@/components/Users'
import Cart from '@/components/Cart'
import Search from '@/components/Search'
import SearchDetail from '@/components/SearchDetail'
import Product from '@/components/Product'
import Login from '@/components/Login'
import Password from '@/components/Password'
import Address from '@/components/Address'
import Error from '@/components/404'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'footer-active',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/category', component: Category},
    {path: '/user',
      component: Users,
      meta: {
        login_require: true
      }
    },
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/search', component: Search},
    {path: '/searchDetail', component: SearchDetail},
    {path: '/product', component: Product},
    {path: '/password', component: Password},
    {path: '/login', component: Login},
    {path: '/hello', component: Hello},
    {path: '/address', component: Address},
    {path: '/error', component: Error}
  ]
})
router.beforeEach((to, from, next) => {
  this.a.app.$store.commit('loginStatusUpdate')
  let loginFlag = this.a.app.$store.state.isLogin
  let needValidRouterIndex = ['/user', '/cart', '/password'].findIndex(item => item === to.path)
  if (needValidRouterIndex !== -1) {
    if (!loginFlag) {
      router.app.$store.commit('updateRouterPath', to.path)
      next('/login')
    }
  }
  if (loginFlag && to.path === '/login') {
    next('/home')
  }
  next()
})

export default router
