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
          <h1>{{ $route.query.card.title }}</h1>
        </div>
        <div class="col-2"></div>
      </div>
      <!-- /container -->
    </div>

    <div class="main-content">
      <div class="left-side">
        <div class="item picture-div">
          <img :src="$route.query.card.url" class="cover-picture" alt="pic" />
        </div>

        <div class="interactive">
          <div class="host-icon-div">
            <span class="material-icons host-icon">account_circle</span>
          </div>
          <div class="interactive-icons-div">
            <span class="material-icons icon-right"> favorite </span>
            <span class="material-icons icon-right"> share </span>
          </div>
        </div>
        <hr />
        <span class="material-icons description-icon"> description </span>
        <div class="item icon-field description">
          <div class="card-description">
            {{ $route.query.card.description }}
          </div>
        </div>

        <div class="event-website-link-div">
          <span class="material-icons"> link </span>
        </div>
        <!-- /left-side -->
      </div>

      <div class="right-side">
        <div class="item icon-field card-category">
          <span class="material-icons">label</span>
          <span class="text-near-icon">
            {{ $route.query.card.category }}
          </span>
        </div>
        <div class="item icon-field card-date">
          <span class="material-icons"> event </span>
          <span class="text-near-icon">
            {{ $route.query.card.date }}
          </span>
        </div>
        <div class="item icon-field card-location">
          <span class="material-icons"> place </span>
          <span class="text-near-icon">
            {{ $route.query.card.location }}
          </span>
        </div>
        <div class="item icon-field card-time">
          <span class="material-icons"> schedule </span>
          <span class="text-near-icon">
            {{ $route.query.card.time }}
          </span>
        </div>
        <div class="item icon-field card-price">
          <span class="material-icons"> payments </span>
          <span class="text-near-icon">
            {{ $route.query.card.price }}
          </span>
        </div>
        <div class="comment-section">
          <span class="material-icons"> comment </span>
        </div>
        <!-- /right side -->
      </div>

      <!-- /main content -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return this.$route.query;
  },
};
</script>

<style lang="scss" scoped>
/*  SUB HEADER   */
.container {
  margin: 1em auto;
}
.col-2,
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/*  BODY   */
.main-content {
  display: flex;
  /* min-width: fit-content; */
  max-width: 80vw;
  margin: 2em auto 0 auto;
}
.item {
  display: flex;
  margin-bottom: 1em;
  /* border: 1px solid red; */
}
/*  LEFT  pic  */
.left-side {
  /* width:fit-content; */
  width: 60%;
}
.picture-div {
  display: flex;
  margin-bottom: 1em;
}
.cover-picture {
  margin: auto;
  width: 98%;
}
.description {
  margin: auto;
}
.card-description {
  padding: 0 0.2em;
  line-break: anywhere;
}
.interactive {
  margin: -0.2em 0.5em 1em 0;
  display: flex;
  .material-icons {
    margin-left: 1em;
  }
}
.host-icon-div {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.interactive-icons-div {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  float: right;
}
.event-website-link-div {
  margin-top: 4em;
}
/*  RIGHT  */
.right-side {
  width: 40%;
  text-align: left;
  padding-left: 0.25em;
  /* border: 1px solid green; */
}
.text-near-icon {
  margin-left: 0.5em;
}
.comment-section {
  /* border: 1px solid green; */
  margin-top: 2em;
  display: flex;
  justify-content: center;
}
</style>