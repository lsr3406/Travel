import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import('@/pages/home/Home') // 异步加载
  }, {
    path: '/city',
    name: 'City',
    // component: City
    component: () => import('@/pages/city/City') // 异步加载
  }, {
    path: '/detail/:id',
    name: 'Detail',
    // component: Detail
    component: () => import('@/pages/detail/Detail') // 异步加载
  }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
