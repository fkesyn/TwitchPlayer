<template>
  <div>
    <b-container class="search-container">
      <b-row>
<b-col lg="2" cols="12">  <label>Search for a stream:</label></b-col>
        <b-col lg="8" cols="12">

          <input
                  name="search-stream"
                  @input="searchByInput"
                  v-model="query"
          >
        </b-col>
      <b-col lg="2" cols="12">
        <DropDown id="limit-drop-down" @input="searchByLimit" name="Limit" :items="[5,10,15,20,25]"  v-model="limit"/>
      </b-col>
      </b-row>
    </b-container>

    <ListStreams />

    <!--{{ this.$store.getters.previousPage }}-->
    <!--{{ this.$store.getters.currentPage }}-->
    <!--{{ this.$store.getters.nextPage }}-->
  </div>
</template>

<script>
import DropDown from './DropDown.vue'
import ListStreams from './ListStreams.vue'
export default {
  name: 'SearchStreams',
  components: {
    DropDown,
    ListStreams
  },
  data () {
    return {
      query: null,
      limit: this.$localStorage.get('limit',20),
      offset: 5
    }
  },
  methods: {
    searchByLimit: function () {
      this.$localStorage.set('limit', this.limit)
      if (this.limit === 0) {
        this.query = null
        this.$store.commit('clearStreams')
      } else if (this.query.length > 0) {
        this.search()
      }
    },
    searchByInput: function (event) {
      this.query = event.target.value
      if (this.query.length > 0) {
        this.search()
      } else {
        var self = this
        setTimeout(function () {
          self.$store.commit('clearStreams')
        }, 1000)
      }
    },
    search: function () {
      this.axios
        .get(
          'https://api.twitch.tv/kraken/search/streams?limit=' +
                      this.limit +
                      '&offset=' +
                      this.offset +
                      '&query=' + this.query
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

<style>
  .search-container {
    margin-top:50px;
    margin-bottom: 30px;
  }
  input {
    width:100%;
  }
</style>
