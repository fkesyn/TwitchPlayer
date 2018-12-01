<template>
  <div id="app">
    <input
      name="search-stream"
      @input="search"
    >
    <ListStreams />
    <!--{{ this.$store.getters.previousPage }}-->
    <!--{{ this.$store.getters.currentPage }}-->
    <!--{{ this.$store.getters.nextPage }}-->
  </div>
</template>

<script>
  import ListStreams from './ListStreams.vue'
export default {
  name: 'SearchStreams',
  components: {
    ListStreams
  },
  data () {
    return {
      info: null,
      request: null,
      limit: 20,
      offset: 5
    }
  },
  methods: {
    search: function (event) {
      this.axios
        .get(
          'https://api.twitch.tv/kraken/search/streams?limit=' +
                                this.limit +
                                '&offset=' +
                                this.offset +
                                '&query=' +
                                event.target.value
        )
        .then(response => {
          this.$store.commit('saveStreams', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
