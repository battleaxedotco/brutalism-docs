import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
routes.push({
  path: '/Sandbox',
  name: '404',
  component: () => import("@/views/404.vue")
})

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
