<template>
    <div id="app">
        <input @input="search" name="search-stream">
            {{ this.$store.getters.previousPage }}
        {{ this.$store.getters.currentPage }}
        {{ this.$store.getters.nextPage }}
    </div>
</template>

<script>
    import StreamPlayer from "./StreamPlayer.vue";
    export default {
        name: "SearchStreams",
        components: {
            StreamPlayer
        },
        props: {
            ow: Array
        },
        data() {
            return {
                info: null,
                request: null,
                limit: 20,
                offset: 5
            };
        },
        methods: {
            search: function(event) {
                this.axios
                        .get(
                                "https://api.twitch.tv/kraken/search/streams?limit=" +
                                this.limit +
                                "&offset=" +
                                this.offset +
                                "&query=" +
                                event.target.value
                        )
                        .then(response => {
                    //          console.log(response.data._links);
                    this.$store.commit("saveStreams", response.data);
            })
                .catch(error => {
                    console.log(error);
            });
            }
        }
    };
</script>
