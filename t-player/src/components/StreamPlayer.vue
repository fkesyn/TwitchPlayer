<template>
    <div>
        <b-container>
            <b-row>
                <b-col lg="2" cols="12">
                    <router-link :to="{ name: 'Search'}">
                        <b-button class="back-button">Back</b-button></router-link>
                </b-col>
            </b-row>
            <b-row>
                <iframe
                        :src="channel"
                        height="720"
                        width="1280"
                        frameborder="0"
                        scrolling="yes"
                        allowfullscreen="true">
                </iframe>
            </b-row>
        </b-container>

    </div>
</template>

<script>
export default {
  name: 'StreamPlayer',

  data () {
    return {
      channel: 'https://player.twitch.tv/?channel=' + this.$route.params.channel
    }
  },
  mounted: function () {
    console.log('here')
    this.$store.commit('clearStreams')
  }
}
</script>
<style>
    iframe {
        margin-top: 20px;
    }
    .back-button {
        margin-top: 20px;
        width:100%
    }
</style>
