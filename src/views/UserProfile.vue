<template>
  <div class="user-profile-page">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/"
            ><span class="material-icons" style="color: black"
              >arrow_back_ios</span
            ></router-link
          >
        </div>
        <div class="col-8">
          
          welcome
          <div style="color: #ffc0cb">
            <span>{{ usr }}</span>
          </div>
          <div>
            <img
              src="../../public/favicon2.png"
              style="
                box-shadow: 0 0 1px #111;
                width: 120px;
                height: 120px;
                border-radius: 50%;
              "
              alt="uuh"
            />
          </div>
        </div>
        <div class="col-2">
          <span class="logout-link-wrapper" @click="logout">
            <router-link
              id="logout-button"
              class="rutlink"
              tag="button"
              :to="{ path: '/' }"
            >
              Log Out
            </router-link>
          </span>
        </div>
      </div>
    </div>

    <!-- HOSTED EVENTS -->
    <div class="my-events" style="margin: 6em auto">
      <span class="material-icons"> admin_panel_settings </span>
      <span>events I hosted:</span>
      <div class="hosted-events-lane">
        <event-card
          v-for="eventCard in cardsHosted"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>

      <!-- LIKED EVENTS -->
      <span id="heart-icon" class="material-icons" style="color: #e0115f">
        favorite
      </span>
      <div class="like-lane">
        <event-card
          v-for="eventCard in cardsHeart"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>

      <!-- EYE EVENTS -->
      <span
        id="eye-icon"
        class="material-icons"
        style="color: skyblue; margin: auto"
      >
        visibility
      </span>
      <div class="eye-lane">
        <event-card
          v-for="eventCard in cardsEye"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase, db } from "@/firebase";
import store from "@/store.js";
import EventCard from "../components/EventCard.vue";
export default {
  name: "UserProfile",
  components: {
    EventCard,
  },
  data() {
    return {
      store,
      cardsHeart: [],
      cardsEye: [],
      cardsHosted: [],
      usr: this.$attrs.user.email,
    };
  },
  mounted() {
    this.getCards();
    this.getHosted();
  },
  methods: {
    getHosted() {
      db.collection("events")
        .get()
        .then((query) => {
          this.cardsHosted = [];

          query.forEach((doc) => {
            const data = doc.data();
            if (data.author === this.usr) {
              this.cardsHosted.push({
                id: doc.id,
                time: data.posted_at,
                eventImage: data.eventImage,
                title: data.eventTitle,
                author: data.author,
                organization: data.org,
                additionalInfo: data.additionalInfo,
                category: data.category,
                price: data.price,
                startDate: data.startDate,
                endDate: data.endDate,
                startTime: data.startTime,
                endTime: data.endTime,
                location: data.location,
              });
            }
          });
        });
    },
    getCards() {
      db.collection("events")
        .get()
        .then((query) => {
          this.cardsHeart = [];
          this.cardsEye = [];

          query.forEach((event) => {
            const data = event.data();

            db.collection("events")
              .doc(event.id)
              .collection("hearts")
              .get()
              .then((query) => {
                query.forEach((hearts) => {
                  if (hearts.data().usr == this.usr) {
                    this.cardsHeart.push({
                      id: event.id,
                      time: data.posted_at,
                      eventImage: data.eventImage,
                      title: data.eventTitle,
                      author: data.author,
                      organization: data.org,
                      additionalInfo: data.additionalInfo,
                      category: data.category,
                      price: data.price,
                      startDate: data.startDate,
                      endDate: data.endDate,
                      startTime: data.startTime,
                      endTime: data.endTime,
                      location: data.location,
                    });
                  }
                });
              });

            db.collection("events")
              .doc(event.id)
              .collection("eye")
              .get()
              .then((query) => {
                query.forEach((eye) => {
                  if (eye.data().usr == this.usr) {
                    this.cardsEye.push({
                      id: event.id,
                      time: data.posted_at,
                      eventImage: data.eventImage,
                      title: data.eventTitle,
                      author: data.author,
                      organization: data.org,
                      additionalInfo: data.additionalInfo,
                      category: data.category,
                      price: data.price,
                      startDate: data.startDate,
                      endDate: data.endDate,
                      startTime: data.startTime,
                      endTime: data.endTime,
                      location: data.location,
                    });
                  }
                });
              });
          });
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.log("something happened", error);
        });
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
#logout-button {
  background-color: white;
  border: 1px solid crimson;
  padding: 0.25em 0.75em;
  margin: 1em 0;
  /* color: #2c3e50; */
  border-radius: 16px;
}
#logout-button:hover {
  box-shadow: 1px 1px 1px crimson;
}
.hosted-events-lane,
.like-lane,
.eye-lane {
  width: 90vw;
  margin: 0.2em auto 4em auto;
  display: flex;
  overflow: auto;
  min-height: fit-content;
  border-top: 1px solid gray;
}
</style>
