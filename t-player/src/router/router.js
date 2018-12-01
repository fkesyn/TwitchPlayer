import Vue from 'vue'
import VueRouter from 'vue-router'
import StreamPlayer from '../components/StreamPlayer.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/player/:channel', name: 'StreamPlayer', component: StreamPlayer }
  ]
})
