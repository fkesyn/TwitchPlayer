<template>
    <div class="search__container">
        <!--<b-form-input class="search__input"-->
        <!--type="text"-->
        <!--placeholder="Search" @keyup.enter.native="search"></b-form-input>-->
        <input class="search__input"
                      type="text"
                      placeholder="Search" @keyup="search">
    </div>
</template>
<script>
export default {
  name: 'SearchBar',
  methods: {
    search: function (event) {
      if (event.code === 'Enter') {
        let value = event.target.value
        this.$emit('doSearch', value)
      }
    }
  }
}
</script>
<style>
    .search__input {
        width: 100%;
        padding: 12px 24px;
        background-color: white;
        transition: transform 250ms ease-in-out;
        font-size: 20px;
        line-height: 25px;
        color: #643FA6;
        background-color: transparent;
        background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 5px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
    }

    .search__input::placeholder {
        color: rgba(100, 63, 166, 0.8);
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    .search__input:hover,
    .search__input:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
    }
</style>
