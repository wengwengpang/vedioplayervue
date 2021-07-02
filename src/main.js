import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store"
// import pagination from "vue-awesome-swiper"
import 'normalize.css/normalize.css'
import './assets/styles/iconfont.css'
import '@/assets/styles/iconfont/iconfont.js'
// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
