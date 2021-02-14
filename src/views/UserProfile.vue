<template>
  <div class="user-profile-page">
    <div class="like-lane">
      <p>liked events:</p>
      <event-card
        v-for="eventCard in cards"
        :key="eventCard.id"
        :card_info="eventCard"
      >
      </event-card>
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
      cards: [],
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
          this.cards = [];

          query.forEach((doc1) => {
            const data = doc1.data();

            db.collection("events")
              .doc(doc1.id)
              .collection("hearts")
              .get()
              .then((query) => {
                query.forEach((doc2) => {
                  if (doc2.data().usr == this.usr) {
                    this.cards.push({
                      id: doc1.id,
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
.like-lane {
  width: 100vw;
  /* border: 1px solid black; */
  display: flex;
  overflow: scroll;
}
</style>
