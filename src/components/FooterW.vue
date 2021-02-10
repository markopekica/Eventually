<template>
<div id="footerW">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <router-link to="/about" style="color:#2c3e50;">About</router-link>
          </div>
          <div class="col-sm">
            <img src="../assets/logo.png" id="home-logo" alt="">
          </div>
          <div class="col-sm">
            <span v-bind:title="year">Eventually &copy; {{ year }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "FooterW",
   data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style lang="scss" scoped>
#footerW{
  background-color: #111;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#home-logo{
  height: 28px;
}
</style>