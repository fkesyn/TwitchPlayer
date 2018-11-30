<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <MyTeste msg="hello World!" />
  </div>
</template>

<script>
import MyTeste from './components/teste.vue';

export default {
  name: 'app',
  components: {
    MyTeste,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
