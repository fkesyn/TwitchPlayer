<template>
  <div>
      <div id="list-container" v-if="this.$store.getters.streams.length > 0">
          <b-col>
              <b-row>
                  <b-col
                          v-for="stream in this.$store.getters.streams"
                          :key="stream._id"
                          class="thumbnail"
                  >
                      <router-link :to="{ name: 'StreamPlayer', params: { channel: stream.channel.name} }"><img
                              :src="stream.preview.medium"
                      ></router-link>
                  </b-col>
              </b-row>
          </b-col>
          </div>
  </div>
</template>
<script>
export default {
  name: 'ListStreams',
  data () {
    return {
      streams: this.$store.getters.streams
    }
  }
}
</script>
<style>
    #list-container {
        border-radius: 5px;
        border: 1px solid #575756;
        padding: 12px;
        margin: 5px 30px 30px 40px;
    }
    .thumbnail {
        margin-bottom: 10px;
    }
</style>
