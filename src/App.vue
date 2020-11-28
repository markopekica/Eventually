<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="./assets/logo.png" id="home-logo" alt=""></router-link>
      <router-link to="/login"><span id="login" class="material-icons">login</span></router-link>
    </div>
    <router-view/>
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <router-link to="/info" style="color:#2c3e50;">INFO</router-link>
          </div>
          <div class="col-sm">
            <img src="./assets/logo.png" id="home-logo" alt="">
          </div>
          <div class="col-sm">
            <span v-bind:title="message">Eventually &copy; {{ message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      message: new Date().getFullYear()
    }
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
  background-color: snow;
  min-height: 100vh;
  position: relative;
  padding-bottom: 150px;  // za footer; uglavnom ide visina footera, ali malo je za ovo
}
#nav {
  display: flex;
  align-items: center;
  padding: 30px;
  max-height: 64px;
  justify-content: space-between;
  background-color: #111;
  /* a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';
}
#home-logo{
  height: 28px;
  align-self: center;
}
#login{
  justify-content: center;
  color: skyblue;
}
#footer{
  background-color: #111;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
