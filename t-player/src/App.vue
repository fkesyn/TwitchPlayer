<template>
  <div id="app">
    <!--<img src="./assets/twitchLogo.svg.png">-->
    <!--<b-img :src="~/assets/twitchLogo.svg.png" width="500" height="500" fluid alt="Twitch logo" />-->

    <b-img
      :src="require('./assets/twitchLogo.svg.png')"
      width="500"
      fluid
      height="500"
    />
    <SearchStreams />
    <ListStreams />

    <h1 class="center-content">
      crlll
    </h1>
  </div>
</template>

<script>
import SearchStreams from './components/SearchStreams.vue'
import ListStreams from './components/ListStreams.vue'
export default {
  name: 'App',
  components: {
    SearchStreams,
    ListStreams
  }
}
</script>
