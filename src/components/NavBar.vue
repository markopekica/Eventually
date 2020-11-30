<template>
<div id="nav">
      <router-link to="/"><img src="../assets/logo.png" id="home-logo" alt=""></router-link>
      <router-link to="/login"><span id="login" class="material-icons">login</span></router-link>
</div>    
</template>

<script>
export default {
  name: "NavBar",
  props: [],
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  padding: 30px;
  max-height: 64px;
  justify-content: space-between;
  background-color: #111;
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
}
#login{
  color: skyblue;
}
</style>