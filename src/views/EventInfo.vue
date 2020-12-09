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
          <h1>{{$route.query.card.title}}</h1>
        </div>
        <div class="col-2"></div>
      </div>
    </div>  <!-- /container -->
    <div class="main-content">
      <div>
        <img :src="$route.query.card.url" class="" alt="pic" />
      </div>
        category: {{$route.query.card.category}}
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return this.$route.query
  }
};
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
/* .row{
  border: 1px solid red;
} */
.main-content{
  display: flex;
  flex-direction: column;
  max-width: 88vw;
  margin: auto;
  /* border: 1px solid red; */
}
</style>