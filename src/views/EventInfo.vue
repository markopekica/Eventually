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
          <div class="interactive-icons-div">
            <span class="material-icons host-icon">account_circle</span>
            <span id="heart-icon" class="material-icons" @click="like">
              favorite
            </span>
            <span class="material-icons"> share </span>
          </div>
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
        <!-- /right side -->
      </div>

      <!-- /main content -->
    </div>
    <hr />
    <div class="item icon-field description-div">
      <div class="previse-divova">
        <span class="material-icons description-icon"> description </span>

        <span class="material-icons"> language </span>
      </div>
      <!-- <div class="event-website-link-div">
        </div> -->
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
      if (heartColor != "black") {
        document.getElementById("heart-icon").style.color = "black";
      } else {
        document.getElementById("heart-icon").style.color = "#e0115f";
      }
    },
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
  width: 55%;
  /* hr {
    background-color: darkslategray;
  } */
}
.picture-div {
  display: flex;
  margin-bottom: 1em;
}
.cover-picture {
  margin: auto;
  width: 100%;
}
.interactive {
  margin: -0.5em 1em 0.5em 1em;
  display: flex;
}
.interactive-icons-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#heart-icon{color:black;}
#heart-icon:hover {
  cursor: pointer;
}
.description-div {
  max-width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
}
hr {
  max-width: 80vw;
  margin: 0 auto;
}
.previse-divova {
  /* description dio - ikone i tekst; ispod crte iznad komentara */
  display: flex;
  margin: 0.75em 1em 0.2em 1em;
  /* justify-content: space-between; */
  *{
    margin-right: 1em;
  }
}
.card-description {
  margin: 0.2em 1em 0.2em 1em;
  line-break: anywhere;

}
.event-website-link-div {
  margin: 0.2em 0.5em;
  text-align: left;
  margin-top: 2em;
}
/*  RIGHT  */
.right-side {
  width: 45%;
  text-align: left;
  padding: 0.5em 0 0.5em 1em;
  background-color: whitesmoke;
  /* border: 1px solid green; */
}
.text-near-icon {
  margin-left: 0.5em;
}
.comment-section-div {
  background-color: #111;
  max-width: 80vw;
  margin: auto;
  min-height: 24em;
  margin-top: 4em;
  padding-top: 1em;
  display: flex;
  justify-content: center;
}
@media only screen and (min-width: 1080px) {
  .main-content, .description-div, hr, .comment-section-div{
    width: 900px;
  }
  /* .right-side{
    background-color: black;
  } */
}
</style>