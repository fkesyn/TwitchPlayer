/**
 * Created by fkesy on 30/11/2018.
 */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from "./store/store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.css';


Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
})