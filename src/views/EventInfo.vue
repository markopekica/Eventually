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
      <div class="top-main">
        <div class="item picture-div">
          <img :src="$route.query.card.url" class="cover-picture" alt="pic" />
        </div>
        <div class="interactive">
          <div class="interactive-icons-div">
            <span class="material-icons host-icon">account_circle</span>
            <span id="heart-icon" class="material-icons" @click="like">
              favorite
            </span>
            <span class="material-icons"> share </span>
          </div>
        </div>
        <!-- /top (picture, like icon) -->
      </div>

      <div class="basic-info">
        <div class="item icon-field card-category">
          <span class="material-icons">label</span>
          <span class="text-near-icon">
            {{ $route.query.card.category }}
          </span>
        </div>
        <div class="item icon-field card-date">
          <span class="material-icons"> event </span>
          <div class="date-from">
            <span class="text-near-icon from">From:</span>
            <span class="text-near-icon">
              {{ $route.query.card.dateFrom }}
            </span>
          </div>
          <div class="date-to">
            <span class="text-near-icon to">To:</span>
            <span class="text-near-icon">
              {{ $route.query.card.dateTo }}
            </span>
          </div>
        </div>
        <div class="item icon-field card-time">
          <span class="material-icons"> schedule </span>
          <div class="time-from">
            <span class="text-near-icon from">From:</span>
            <span class="text-near-icon">
              {{ $route.query.card.timeFrom }}
            </span>
          </div>
          <div class="time-to">
            <span class="text-near-icon to">To:</span>
            <span class="text-near-icon">
              {{ $route.query.card.timeTo }}
            </span>
          </div>
        </div>
        <div class="item icon-field card-location">
          <span class="material-icons"> place </span>
          <span class="text-near-icon">
            {{ $route.query.card.location }}
          </span>
        </div>
        <div class="item icon-field card-price">
          <span class="material-icons"> payments </span>
          <span class="text-near-icon">
            {{ $route.query.card.price }}
          </span>
        </div>
        <!-- /basic info (black box) -->
      </div>
      <!-- /main content -->
    </div>
    <hr />

    <div class="item icon-field description-div">
      <div class="previse-divova">
        <span class="material-icons description-icon"> description </span>
        <span class="material-icons"> language </span>
      </div>
      <div class="card-description">
        {{ $route.query.card.description }}
      </div>
    </div>

    <div class="comment-section-div">
      <span class="material-icons"> comment </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return this.$route.query;
  },
  methods: {
    like() {
      let heartColor = document.getElementById("heart-icon").style.color;
      if (heartColor != "#e0115f") {
        document.getElementById("heart-icon").style.color = "#e0115f";
      } else {
        document.getElementById("heart-icon").style.color = "black";
      }
    },
  },
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
/*  BODY   */
.main-content {
  /* content above hr */
  max-width: 80vw;
  margin: 2em auto 0 auto;
}
.item {
  display: flex;
  margin-bottom: 1em;
  /* border:1px solid red; */
}
.top-main {
  /* pic with 3 interactive icons below */
  width: 100%;
  margin: auto;
}
.picture-div {
  display: flex;
  margin-bottom: 1em;
}
.cover-picture {
  margin: auto;
  width: 100%;
  border-radius: 4px;
}
.interactive {
  margin: 0 1em 0.5em 1em;
  display: flex;
  width: 80%;
  margin:auto;
}
.interactive-icons-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#heart-icon:hover {
  cursor: pointer;
}
/* GREY INFO BOX */
.basic-info {
  /*  grey frame with: time, date, location, price  */
  width: 80%;
  text-align: left;
  margin: 1em auto 1em auto;
  /* padding: 1.5em 1em 1em 1em; */
  padding: .2em 0;
  color: rgb(204, 204, 204);
  background-color: #111;
  border-radius: 1.5em;
  /* border: 1px solid green; */
}
.text-near-icon {
  margin-left: 0.5em;
}
.card-category, .card-date, .card-time, .card-location, .card-price{
  /* border: 1px solid red; */
  margin: 2em;
}
.card-date,
.card-time {
  display: flex;
  align-items: center;
}
.date-from,
.date-to,
.time-from,
.time-to {
  display: flex;
  flex-direction: column;
  padding-right: 1em;
  width: 42%;
}
.from,
.to {
  font-size: 70%;
  margin-left: 0.7em;
  font-weight: bold;
}
hr {
  max-width: 80vw;
  margin: 0 auto;
}
.description-div {
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.previse-divova {
  /* description dio; ispod crte, iznad komentara */
  display: flex;
  margin: 0.75em 1em 0.2em 1em;
  /* justify-content: space-between; */
  * {
    margin-right: 1em;
  }
}
.card-description {
  margin: 0.5em 1em;
  text-align: left;
}
.event-website-link-div {
  margin: 0.2em 0.5em;
  text-align: left;
  margin-top: 2em;
}
/* COMMENT SECTION */
.comment-section-div {
  background-color: #111;
  max-width: 80%;
  margin: auto;
  min-height: 24em;
  margin-top: 4em;
  padding-top: 1em;
  display: flex;
  justify-content: center;
  border-radius: 1em;
}
@media only screen and (min-width: 1080px) {
  .main-content,
  .description-div,
  hr,
  .comment-section-div {
    width: 900px;
  }
}
</style>