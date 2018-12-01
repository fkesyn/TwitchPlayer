<template>
  <div>
    <b-container class="search-container">
      <b-row>
<b-col lg="2" cols="12">  <label>Search for a stream:</label></b-col>
        <b-col lg="8" cols="12">

          <input
                  name="search-stream"
                  @input="search"
          >
        </b-col>
      <b-col lg="2" cols="12">
        <DropDown id="limit-drop-down" name="Limit" :items="[5,10,15,20,25]"  />
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

<style>
  .search-container {
    margin-top:50px;
    margin-bottom: 30px;
  }
  input {
    width:100%;
  }
</style>
