<template>
    <div>
        <SearchStreams/>
        <router-view></router-view>
    </div>
</template>

<script>
import SearchStreams from '../components/SearchStreams.vue'
export default {
  name: 'SearchContainer',
  components: {
    SearchStreams
  }
}
</script>
