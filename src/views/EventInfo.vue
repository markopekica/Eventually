<template>
  <div class="event-info-page">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/">
            <span class="material-icons" style="color: black"
              >arrow_back_ios</span
            >
          </router-link>
        </div>
        <div class="col-8">
          <h1>Title</h1>
        </div>
        <div class="col-2"></div>
      </div>
    </div>  <!-- /container -->
    <div>
    </div>
  </div>
</template>

<script>
export default{
  name: "EventInfo",
  props: {}
}
</script>

<style lang="scss" scoped>
.container {
  margin: 1em auto;
}
.col-2,
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>