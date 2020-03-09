import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import User from '@/pages/user/User'
import Mine from '@/pages/mine/Mine'
import Login from '@/pages/login/Login'
import Location from '@/pages/location/Location'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Register from '@/pages/register/Register'
import Setting from '@/pages/setting/Setting'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/place',
      name: 'Location',
      component: Location
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ],
  //每次路由跳转回到顶部
  scrollBehavior (to, from, savedPosition) {
    return {x: 0,y: 0}
  }
})
