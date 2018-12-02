import Vue from 'vue'
import SearchStreams from '../components/SearchStreams.vue'

describe('SearchStreams.vue', () => {
  it('displays default message', () => {
    const Ctor = Vue.extend(SearchStreams)
    const vm = new Ctor().$mount()

    expect(vm.$el.textContent).toContain('Kesyn')
  })
})