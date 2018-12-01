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

      <router-view></router-view>



  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>
