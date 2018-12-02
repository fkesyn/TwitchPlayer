<template>
  <div>
    <b-container class="search-container">
      <b-row>
        <b-col lg="2" cols="12">
          <DropDown id="limit-drop-down" name="LIMIT" :items="limitOptions" :selectedOption = "this.$store.getters.limit"/>
        </b-col>
        <b-col lg="8" cols="12">
          <SearchBar @doSearch ="search" />
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import DropDown from './partials/DropDown.vue'
import SearchBar from './partials/SearchBar.vue'
import { twitchUrls } from '../config'

export default {
  name: 'SearchStreams',
  components: {
    SearchBar,
    DropDown
  },
  data () {
    return {
      limitOptions: [5, 10, 15, 20, 25]
    }
  },
  methods: {
    search: function (query) {
      let limit = this.$store.getters.limit
      let url = twitchUrls.STREAMS

      if (query.length > 0) {
        url += limit > 0 ? 'limit=' + limit : ''
        this.axios
          .get(url + '&query=' + query)
          .then(response => {
            this.$store.commit('saveStreams', response.data)
            this.$router.replace('/search')
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        this.$store.commit('clearStreams')
        this.$router.replace('/search')
      }
    }
  }
}
</script>

<style>
  .search-container {
    margin-top:50px;
    margin-bottom: 30px;
  }
  /*input {*/
    /*width:100%;*/
  /*}*/
</style>
