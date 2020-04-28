import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

require('../public/prism.css');
// require('../public/prism.js')

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
