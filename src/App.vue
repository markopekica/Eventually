<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <footer-w/>
  </div>
</template>

<script>
import FooterW from './components/FooterW.vue'
import NavBar from './components/NavBar.vue'
export default {
    components: {
      NavBar,
        FooterW,
    },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: snow;
  min-height: 100vh;
  position: relative;
  padding-bottom: 150px;  // za footer; uglavnom ide visina footera
}
</style>
