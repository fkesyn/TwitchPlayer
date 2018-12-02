import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Vuex)
Vue.use(VueLocalStorage)

export const store = new Vuex.Store({
  state: {
    limit: parseInt(Vue.localStorage.get('limit', 20)),
    streams: null,
    previousPage: null,
    currentPage: null,
    nextPage: null
  },
  mutations: {
    setLimit (state, value) {
      state.limit = parseInt(value)
      Vue.localStorage.set('limit', state.limit)
    },
    saveStreams (state, data) {
      state.previousPage = data._links.previous
      state.currentPage = data._links.self
      state.nextPage = data._links.next
      state.streams = data.streams
    },
    clearStreams (state) {
      state.streams = []
    }
  },
  getters: {
    streams: state => state.streams,
    previousPage: state => state.previousPage,
    currentPage: state => state.currentPage,
    nextPage: state => state.nextPage,
    limit: state => state.limit
  }
})
