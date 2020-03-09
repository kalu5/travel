// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Fastclick from 'fastclick'
import store from './store/index'
import { Form, FormItem, Button, Input, Alert } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Fastclick.attach (document.body)

Vue.use(VueAwesomeSwiper)
Vue.use (Form)
Vue.use (FormItem)
Vue.use (Button)
Vue.use (Input)
Vue.use (Alert)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
