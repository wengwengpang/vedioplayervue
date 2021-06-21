import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/home/Home"
import City from "@/pages/city/City"
// import homeContent from "@/pages/home/components/rightContainer/components/homeContent"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
  // {
  //   path: '/homeContent/:id',
  //   name:'homeContent',
  //   component: homeContent
  // }
]

const router = new VueRouter({
  routes
})

export default router
