<template>
  <div>
      <div  id="list-container" v-if="this.$store.getters.streams.length > 0">
              <b-row>
                  <b-col
                          v-for="stream in this.$store.getters.streams"
                          :key="stream._id"
                          class="thumbnail"
                  lg="3" md="4" sm="6" cols="12">
                      <router-link :to="{ name: 'StreamPlayer', params: { channel: stream.channel.name} }">
                          <b-img thumbnail fluid :src="stream.preview.medium" />
                              </router-link>
                  </b-col>
              </b-row>
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
        padding: 20px;
       margin-left:20px;
        margin-right:20px;
    }
    .thumbnail {
        margin-bottom: 20px;
    }
</style>
