<template>
  <div class="user-profile-page">
    <div style="margin: 1em auto; color: hotpink">
      <p>welcome {{ usr }}</p>
    </div>
    <div class="my-events" style="margin: 6em auto;">

<div class="like-lane">
      <span id="heart-icon" class="material-icons" style="color: #e0115f;">
        favorite
      </span>
      <event-card
        v-for="eventCard in cardsHeart"
        :key="eventCard.id"
        :card_info="eventCard"
      >
      </event-card>
    </div>
    <span id="eye-icon" class="material-icons" style="color:skyblue; margin:auto;">
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
      usr: this.$attrs.user.email,
    };
  },
  mounted() {
    this.getCards();
  },
  methods: {
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
#logout-button {
  background-color: snow;
  border: 1px solid darkorange;
  padding: 0.5em 1em;
  margin: 1em 0;
  color: #2c3e50;
  border-radius: 16px;
}
.like-lane,
.eye-lane {
  width: 90vw;
  margin: .2em auto 4em auto;
  display: flex;
  overflow: auto;
  min-height: fit-content;
  border: 1px dotted #111;
}
</style>
