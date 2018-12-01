<template>
  <div>
    <b-col>
      <b-row>
        <b-col
          v-for="stream in this.$store.getters.streams"
          :key="stream._id"
          class="thumbnail"
        >
          <!--{{stream.channel.name}}-->
          <img
            class="stream-preview"
            :src="stream.preview.medium"
          >
          <!--<b-img fluid :src="stream.preview.medium" width="100" height="100"  alt="Thumbnail" />-->
        </b-col>
      </b-row>
    </b-col>
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
  //  mounted: function() {
  //    this.streams = this.$store.getters.streams;
  //  }
}
</script>
<style>
    .thumbnail {
        margin-bottom: 10px;
    }
    .stream-preview {
        cursor: pointer;
    }
</style>
