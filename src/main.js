import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/index'
import store from './store'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#006598'
  }
})
Vue.config.productionTip = false

window.localMode = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
