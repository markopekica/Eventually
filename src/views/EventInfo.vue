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
          <img :src="$route.query.card.eventImage" class="cover-picture" alt="pic" />
        </div>
        <div class="interactive">
          <div class="interactive-icons-div">
            <span class="material-icons host-icon">account_circle</span>
            <div class="watch-like-icon-div">
              <div class="watch-div">
                <!-- <span class="response-label">interested</span> -->
                <span id="watch-icon" class="material-icons" @click="follow">
                  visibility
                </span>
                <span class="number-of"> interested: 0 </span>
              </div>
              <div class="like-div">
                <!-- <span class="response-label">99% will come</span> -->
                <span id="heart-icon" class="material-icons" @click="like">
                  favorite
                </span>
                <span class="number-of"> comming: 0 </span>
              </div>
            </div>
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
              {{ $route.query.card.startDate }}
            </span>
          </div>
          <div class="date-to">
            <span class="text-near-icon to">To:</span>
            <span class="text-near-icon">
              {{ $route.query.card.endDate }}
            </span>
          </div>
        </div>
        <div class="item icon-field card-time">
          <span class="material-icons"> schedule </span>
          <div class="time-from">
            <span class="text-near-icon from">From:</span>
            <span class="text-near-icon">
              {{ $route.query.card.startTime }}
            </span>
          </div>
          <div class="time-to">
            <span class="text-near-icon to">To:</span>
            <span class="text-near-icon">
              {{ $route.query.card.endTime }}
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
        {{ $route.query.card.additionalInfo }}
      </div>
    </div>

    <!-- https://schier.co/blog/pure-html-share-buttons -->
    <!-- <div class="share-links">
      <br />
      share this on:
      <br />
      <a
        href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>"
        class="share-btn twitter"
      >
        Twitter
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=<URL>"
        class="share-btn facebook"
      >
        Facebook
      </a>
      <a
        href="https://reddit.com/submit?url=<URL>&title=<TITLE>"
        class="share-btn reddit"
      >
        Reddit
      </a>
      <a
        href="https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>"
        class="share-btn linkedin"
      >
        LinkedIn
      </a>
      <a href="mailto:?subject=<SUBJECT>&body=<BODY>" class="share-btn email">
        Email
      </a>
    </div> -->

    <div class="comment-section-div">
      <!-- 
        skica
       -->
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Have anything to add?</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="comment-icon-div">
          <span class="material-icons add-main-thread"> comment </span>
        </div>
      </form>
      <!-- <div class="comment-thread">
        <div class="comment-main-thread">
          <div class="comment-owner-div">
            <span class="material-icons host-icon">account_circle</span>
            <span>userdasdsdsa dsa name</span>
          </div>
          <div class="comment-body">
            <div class="comnet">
              <span>comnet 1</span>
            </div>
            <div class="info">
              <span>date</span>&emsp;
              <span>time</span>
            </div>
          </div>
        </div>
        <div class="comment-response">
          <div class="comment-owner-div">
            <span class="material-icons host-icon">account_circle</span>
            <span>user name</span>
          </div>
          <div class="comment-body">
            <div class="comnet">
              <span>comnet 1</span>
            </div>
            <div class="info">
              <span>date</span>&emsp;
              <span>time</span>
            </div>
          </div>
        </div>
        <span class="material-icons"> comment </span>
      </div>
      <div class="comment-thread">
        <div class="comment-main-thread">
          <div class="comment-owner-div">
            <span class="material-icons host-icon">account_circle</span>
            <span>user name</span>
          </div>
          <div class="comment-body">
            <div class="comnet">
              <span>comnet 1</span>
            </div>
            <div class="info">
              <span>date</span>&emsp;
              <span>time</span>
            </div>
          </div>
        </div>
        <span class="material-icons"> comment </span>
      </div> -->
      <!-- /commnet section -->
    </div>
  </div>
</template>

<script>
export default {
  name: "EventInfo",
  props: {
    user_status: Boolean,
    usr: {},
  },
  data() {
    return {
      routeData: this.$route.query,
    };
  },
  methods: {
    like() {
      let heartColor = document.getElementById("heart-icon").style.color;
      if (heartColor != "#e0115f" && this.user_status == true) {
        document.getElementById("heart-icon").style.color = "#e0115f";
      } /* else {
        document.getElementById("heart-icon").style.color = "black";
      } */
    },
    follow() {
      if (this.user_status == true) {
        document.getElementById("watch-icon").style.color = "skyblue";
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
h1 {
  font-weight: 700;
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
  margin: auto;
}
.interactive-icons-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.watch-like-icon-div {
  display: flex;
  * {
    margin: 0 0.5em;
  }
}
.like-div,
.watch-div {
  display: flex;
  flex-direction: column;
}
.response-label {
  font-size: 70%;
}
#heart-icon:hover,
#watch-icon:hover {
  cursor: pointer;
}
.number-of {
  font-size: 70%;
}
/* GREY INFO BOX */
.basic-info {
  /*  grey frame with: time, date, location, price  */
  width: 80%;
  text-align: left;
  margin: 1em auto 2em auto;
  /* padding: 1.5em 1em 1em 1em; */
  padding: 0.2em 0;
  color: rgb(204, 204, 204);
  background-color: #111;
  border-radius: 1.5em;
  /* border: 1px solid green; */
}
.text-near-icon {
  margin-left: 0.5em;
}
.card-category,
.card-date,
.card-time,
.card-location,
.card-price {
  /* border: 1px solid red; */
  margin: 1.75em;
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
  margin: 0.5em auto;
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
  margin: 0.5em 1em 0.2em 1em;
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
  /* background-color: #111; */
  border-top: 1px solid #111;
  border-bottom: 1px solid #111;
  border-radius: 4px;
  max-width: 80%;
  margin: 4em auto 2em auto;
  min-height: 6em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1em;
  /* background-color: rgb(255, 245, 225); */
}
#exampleFormControlTextarea1 {
  width: 90%;
  margin: auto;
}
.comment-icon-div {
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0em auto 1em auto;
  color: skyblue;
}
.add-main-thread {
  opacity: 0.7;
}
.add-main-thread:hover {
  cursor: pointer;
  opacity: 1;
}
/* .comment-thread {
  margin: 1.5em auto;
  width: 90%;
}
.comment-main-thread,
.comment-response {
  display: flex;
}

.comment-main-thread {
  margin: 0 0 0.5em 0em;
}
.comment-response {
  width: 90%;
  margin-left: 10%;
}
.comment-owner-div {
  border-right: 1px dotted #111;
  background-color: #111;
  color: rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  max-width: 100px;
  word-break: break-word;
  * {
    margin-right: 0.2em;
  }
}
.comment-body {
  .comnet {
    padding: 1em;
    height: 70%;
  }
  .info {
    border-top: 1px solid #111;
    text-align: left;
    padding-left: 0.5em;
    font-size: 80%;
    font-weight: bold;
  }
}
.comment-main-thread,
.comment-response {
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
} */
@media only screen and (min-width: 1080px) {
  .main-content,
  .description-div,
  hr,
  .comment-section-div {
    width: 900px;
  }
}
@media only screen and (max-width: 600px) {
  .main-content {
    /* content above hr */
    max-width: 90vw;
    margin: 2em auto 0 auto;
  }
  .basic-info {
    width: 90%;
  }
  .description-div {
    max-width: 95%;
  }
  hr {
    max-width: 90%;
  }
  .comment-section-div {
    max-width: 90%;
  }
}

/** Social Button CSS **/

/* .share-btn {
  display: inline-block;
  color: #ffffff;
  border: none;
  padding: 0.1em 0.6em;
  outline: none;
  text-align: center;
  font-size: 0.9em;
  margin: 0 0.2em;
}

.share-btn:focus,
.share-btn:hover {
  text-decoration: none;
  opacity: 0.8;
}

.share-btn:active {
  color: #e2e2e2;
}

.share-btn.twitter {
  background: #55acee;
}
.share-btn.google-plus {
  background: #dd4b39;
}
.share-btn.facebook {
  background: #3b5998;
}
.share-btn.stumbleupon {
  background: #eb4823;
}
.share-btn.reddit {
  background: #ff5700;
}
.share-btn.hackernews {
  background: #ff6600;
}
.share-btn.linkedin {
  background: #4875b4;
}
.share-btn.email {
  background: #444444;
} */
</style>