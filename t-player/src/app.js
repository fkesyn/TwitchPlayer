/**
 * Created by fkesy on 30/11/2018.
 */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'

import { store } from './store/store'
import { router } from './router/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.css'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

axios.defaults.headers.common['Client-ID'] = 'cwxoxdrhwlywwlg3brtff10lac6wl8'
router.replace('/search')

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
