<template>
  <div>
    <b-container class="search-container">
      <b-row>
        <b-col lg="8" cols="12">
          <b-form-input v-model="query"
                        type="text"
                        placeholder="Search" @keyup.enter.native="search"></b-form-input>
        </b-col>
      <b-col lg="2" cols="12">
        <DropDown id="limit-drop-down" name="Limit" :items="limitOptions"/>
      </b-col>
      </b-row>
    </b-container>

    <!--{{ this.$store.getters.previousPage }}-->
    <!--{{ this.$store.getters.currentPage }}-->
    <!--{{ this.$store.getters.nextPage }}-->
  </div>
</template>

<script>
import DropDown from './DropDown.vue'

export default {
  name: 'SearchStreams',
  components: {
    DropDown
  },
  data () {
    return {
      query: '',
      limitOptions: [5, 10, 15, 20, 25],
      offset: 5
    }
  },
  methods: {
    search: function () {
      let limit = this.$store.getters.limit
      if (this.query.length > 0) {
        this.axios
          .get(
            'https://api.twitch.tv/kraken/search/streams?limit=' +
                        limit +
                        '&offset=' +
                        this.offset +
                        '&query=' + this.query
          )
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
  input {
    width:100%;
  }
</style>
