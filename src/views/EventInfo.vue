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
          <img
            :src="$route.query.card.eventImage"
            class="cover-picture"
            alt="pic"
          />
        </div>
        <div class="interactive">
          <div class="interactive-icons-div">
            <div class="watch-like-icon-div">
              <div class="watch-div">
                <span id="eye-icon" class="material-icons" @click="watch">
                  visibility
                </span>
                <span class="response-label">interested</span>
                <span class="number-of">
                  {{ this.numWatched }}
                </span>
              </div>
              <div class="like-div">
                <span id="heart-icon" class="material-icons" @click="like">
                  favorite
                </span>
                <span class="response-label">planning to attend</span>
                <span class="number-of">
                  {{ this.numLiked }}
                </span>
              </div>
            </div>
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
        <div class="item icon-field card-category">
          <span class="material-icons">
            business
          </span>
          <span class="text-near-icon">
            {{ $route.query.card.organization }}
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
        <!-- osnovni podaci: DATUM, LOKACIJA... -->
        <!-- /basic info (box) -->
      </div>
      <!-- /main content -->
    </div>
    <hr />

    <div class="item icon-field description-div">
      <!-- VISE INFORMACIJA text -->
      <div class="previse-divova">
        <span class="material-icons description-icon" @click="showDescription">
          description
        </span>
      </div>
      <div class="card-description" v-if="descriptionOpen">
        {{ $route.query.card.additionalInfo }}
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  name: "EventInfo",
  props: {
    user_status: Boolean,
  },
  data() {
    if (this.user_status) {
      return {
        routeData: this.$route.query,
        usr: this.$attrs.user.email,
        currentEventId: this.$route.query.card.id,
        liked: false,
        numLiked: 0,
        watched: false,
        numWatched: 0,
        descriptionOpen: false,
      };
    } else {
      // inace baca err u konzolu: can't read email of undefined
      return {
        routeData: this.$route.query,
        //usr: this.$attrs.user.email,
        currentEventId: this.$route.query.card.id,
        liked: false,
        numLiked: 0,
        watched: false,
        numWatched: 0,
        descriptionOpen: false,
      };
    }
  },
  mounted() {
    this.checkIfLiked();
    this.checkIfWatched();
  },
  methods: {
    showDescription() {
      this.descriptionOpen == false
        ? (this.descriptionOpen = true)
        : (this.descriptionOpen = false);
    },
    checkIfLiked() {
      if (this.user_status) {
        db.collection("events")
          .doc(this.currentEventId)
          .collection("hearts")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              this.numLiked += 1;
              if (doc.data().usr == this.usr) {
                this.liked = true;
                document.getElementById("heart-icon").style.color = "#e0115f";
              }
            });
          });
      } else {
        db.collection("events")
          .doc(this.currentEventId)
          .collection("hearts")
          .get()
          .then((query) => {
            query.forEach(() => {
              this.numLiked += 1;
              document.getElementById("heart-icon").style.color = "#e0115f";
            });
          });
      }
    },
    like() {
      if (this.user_status != true) {
        alert("Login to use this feature");
      } else {
        // ako nije jos lajkao ubaci ga
        if (this.liked == false) {
          const data = {
            usr: this.usr,
          };
          // sprema usera u ovaj event
          // https://firebase.google.com/docs/firestore/manage-data/add-data
          db.collection("events")
            .doc(this.currentEventId)
            .collection("hearts")
            .doc(this.usr)
            .set(data);
          document.getElementById("heart-icon").style.color = "#e0115f";
          this.liked = true;
          this.numLiked += 1;
          if (this.watched == true) {
            db.collection("events")
              .doc(this.currentEventId)
              .collection("eye")
              .doc(this.usr)
              .delete();
            document.getElementById("eye-icon").style.color = "#2c3e50";
            this.watched = false;
            this.numWatched -= 1;
          }
        } else if (this.liked == true) {
          // ako je obrisi ga iz lajkova
          db.collection("events")
            .doc(this.currentEventId)
            .collection("hearts")
            .doc(this.usr)
            .delete();
          document.getElementById("heart-icon").style.color = "#2c3e50";
          this.liked = false;
          this.numLiked -= 1;
        }
      }
    },
    checkIfWatched() {
      if (this.user_status) {
        db.collection("events")
          .doc(this.currentEventId)
          .collection("eye")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              this.numWatched += 1;
              if (doc.data().usr == this.usr) {
                this.watched = true;
                document.getElementById("eye-icon").style.color = "skyblue";
              }
            });
          });
      } else {
        db.collection("events")
          .doc(this.currentEventId)
          .collection("eye")
          .get()
          .then((query) => {
            query.forEach(() => {
              this.numWatched += 1;
              document.getElementById("eye-icon").style.color = "skyblue";
            });
          });
      }
    },
    watch() {
      if (this.user_status != true) {
        alert("Login to use this feature");
      } else {
        if (this.watched == false) {
          const data = {
            usr: this.usr,
          };
          // dodaj ga u oko
          db.collection("events")
            .doc(this.currentEventId)
            .collection("eye")
            .doc(this.usr)
            .set(data);
          document.getElementById("eye-icon").style.color = "skyblue";
          this.watched = true;
          this.numWatched += 1;
          if (this.liked == true) {
            // obrisi ga iz srca
            db.collection("events")
              .doc(this.currentEventId)
              .collection("hearts")
              .doc(this.usr)
              .delete();
            document.getElementById("heart-icon").style.color = "#2c3e50";
            this.liked = false;
            this.numLiked -= 1;
          }
        } else if (this.watched == true) {
          // ako je obrisi ga iz lajkova
          db.collection("events")
            .doc(this.currentEventId)
            .collection("eye")
            .doc(this.usr)
            .delete();
          document.getElementById("eye-icon").style.color = "#2c3e50";
          this.watched = false;
          this.numWatched -= 1;
        }
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
  margin: auto;
  * {
    margin: 0 0.5em;
  }
}
.like-div,
.watch-div {
  display: flex;
  flex-direction: column;
}

.response-label,
.number-of {
  font-size: 80%;
}
#heart-icon:hover,
#eye-icon:hover {
  cursor: pointer;
}

/* INFO BOX */
.basic-info {
  /*  grey frame with: time, date, location, price  */
  width: 80%;
  text-align: left;
  margin: 1em auto 2em auto;
  /* padding: 1.5em 1em 1em 1em; */
  padding: 0.2em 0;
  color: rgb(204, 204, 204);
  //background-color: #111;
  box-shadow: 0em 0 0.3em 0.01em gray;
  color: #111;
  border-radius: 1em;
}
.text-near-icon {
  margin-left: 0.75em;
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
  width: 45%;
}
.from,
.to {
  font-size: 70%;
  margin-left: 1em;
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
  justify-content: center;
  * {
    margin-right: 1em;
  }
  .site:hover {
    color: skyblue;
  }
}
.description-icon {
  color: skyblue;
  border: 2px solid;
  border-radius: 10px;
  padding: 2px;
}
.description-icon:hover {
  cursor: pointer;
  opacity: 1;
  background-color: #111;
  border: 2px solid #111;
}
.card-description {
  margin: 0.5em 1em;
  padding: 0.25em;
  text-align: left;
  white-space: pre-wrap;
}

@media only screen and (min-width: 1080px) {
  .main-content,
  .description-div,
  hr,
  .comment-section-div {
    width: 800px;
  }
  .basic-info {
    width: 600px;
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
</style>
