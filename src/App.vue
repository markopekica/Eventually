<template>
  <div id="app">
    <nav-bar :user_status="isLoggedIn" :usr="usr" />
    <router-view :user_status="isLoggedIn" />
    <footer-w/>
  </div>
</template>

<script>
import FooterW from './components/FooterW.vue'
import NavBar from './components/NavBar.vue'
import {firebase} from '@/firebase.js'
export default {
    components: {
      NavBar,
      FooterW,
    },
    data() {
      return {
        isLoggedIn: false,
        usr: {}
      }
    },
    /* props: {
      user_status: Boolean
    }, */
    mounted() {
      firebase.auth().onAuthStateChanged( (user) => {
        if(user){
          this.isLoggedIn = true
          this.usr = user
          /* console.log(user) */
        } else{
          this.isLoggedIn = false
          this.usr = user
          /* console.log('No user') */
        }
      });
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  min-height: 100vh;
  position: relative;
  padding-bottom: 150px;  // za footer; uglavnom ide visina footera
}
</style>
