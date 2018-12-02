<template>
    <div>
        <b-container>
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
import { twitchUrls } from '../config'

export default {
  name: 'StreamPlayer',

  data () {
    return {
      channel: twitchUrls.PLAYER + '?channel=' + this.$route.params.channel
    }
  },
  mounted: function () {
    this.$store.commit('clearStreams')
  }
}
</script>
<style>
    iframe {
        margin-top: 20px;
        margin-bottom:40px;
    }
</style>
