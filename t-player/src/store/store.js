import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    streams: null,
    previousPage: null,
    currentPage: null,
    nextPage: null
  },
  mutations: {
    increment (state) {
      state.count++
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
    nextPage: state => state.nextPage
  }
})
