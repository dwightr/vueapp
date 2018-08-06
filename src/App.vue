<template>
  <div id="app">
    <!-- <test msg="Shimi"></test> -->
    <users></users>
    <photos></photos>
  </div>
</template>

<script>
  import Test from './components/test'
  import Users from './components/users'
  import Photos from './components/photos'

  export default {
    name: 'app',
    components: {
      Test, Users, Photos
    }
  }
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
