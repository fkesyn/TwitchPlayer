<template>
    <div>
        <iframe
                :src="channel"
                height="720"
                width="1280"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
        </iframe>
    </div>
</template>

<script>
export default {
  name: 'StreamPlayer',

  data () {
    return {
        channel:"https://player.twitch.tv/?channel="+ this.$route.params.channel
    }
  }
}
</script>
