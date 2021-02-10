<template>
  <div class="category-lane">
    <div id="category">
      <h2>{{ lane_info.title }}</h2>
    </div>
    <div id="lane">
      <event-card
        v-for="eventCard in filteredCards"
        :key="eventCard.id"
        :card_info="eventCard"
        :lane_info="lane_info"
      />
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";

export default {
  name: "CategoryLane",
  props: {
    lane_info: Object,
  },
  components: {
    EventCard,
  },
  data() {
    return {
      store,
      cards: [],
      //card: [],
    };
  },
  mounted() {
    this.getCards();
  },
  methods: {
    getCards() {
      console.log("Firebase dohvat...");

      db.collection("events")
        .get()
        .then((query) => {
          this.cards = [];

          query.forEach((doc) => {
            const data = doc.data();

            this.cards.push({
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
            });
          });
        });
    },
  },
  computed: {
    filteredCards() {
      if (store.dateFrom != "") {
        if (store.dateTo != "") {
          return this.cards.filter(
            (card) =>
              card.startDate >= store.dateFrom && card.endDate <= store.dateTo
          );
        }
        return this.cards.filter((card) => card.startDate >= store.dateFrom);
      } else {
        return this.cards;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-lane {
  margin: 5em 25px;
}
h2 {
  font-weight: 600;
}
#category {
  display: flex;
  border-bottom: 1px solid grey;
}
#lane {
  overflow: auto;
  white-space: nowrap;
  background-color: rgb(15, 2, 2);
  padding: .75em 0;
  display: flex;
}
</style>
