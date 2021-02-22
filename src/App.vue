<template>
  <div id="app">
    <nav-bar :user_status="isLoggedIn" :usr="usr" />
    <router-view :user="usr" :user_status="isLoggedIn" />
    <footer-w/>
  </div>
</template>

<script>
import FooterW from "./components/FooterW.vue";
import NavBar from "./components/NavBar.vue";
import { firebase } from "@/firebase.js";
import router from "@/router";
import store from "@/store.js";

export default {
  components: {
    NavBar,
    FooterW,
  },
  data() {
    return {
      isLoggedIn: false,
      usr: {},
    };
  },
  mounted() {
    this.userCheck();
  },
  methods: {
    userCheck() {
      firebase.auth().onAuthStateChanged((user) => {
        const currentRoute = router.currentRoute;
        if (user) {
          /* user is logged in */
          this.isLoggedIn = true;
          this.usr = user;
          store.currentUser = user.email;
          /* if user not allowed on view jump to UserProfile */
          if (currentRoute.meta.blockUser) {
            router.push({ name: "UserProfile" });
          }
        } else {
          /* no user logged in */
          this.isLoggedIn = false;
          this.usr = user;
          store.currentUser = null;
          /* if view needs user jump to login */
          if (currentRoute.meta.needsUser) {
            router.push({ name: "Login" });
          }
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Rubik', 'Roboto Slab', Helvetica, Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  padding-bottom: 150px; // za footer; uglavnom ide visina footera
}
</style>
