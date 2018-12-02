import Vue from 'vue'
import VueRouter from 'vue-router'
import StreamPlayer from '../components/StreamPlayer.vue'
import SearchList from '../components/ListStreams.vue'
// import SearchContainer from '../containers/SearchContainer.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/player/:channel', name: 'StreamPlayer', component: StreamPlayer },
    { path: '/search', name: 'Search', component: SearchList }
    // { path: '*', component: SearchContainer }
  ]
})
