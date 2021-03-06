<template>
  <div class="category-lane" >
    <div id="category" ><!-- v-if="cardNum > 0" -->
      <h2>{{ lane_info.title }}</h2>
    </div>
    <div id="lane" >
      <div v-for="eventCard in filteredCards" :key="eventCard.id">
        <event-card
          v-if="eventCard.category == lane_info.title"
          :key="eventCard.id"
          :card_info="eventCard"
        ><!-- {{cardNum = cardNum + 1}} --></event-card>
      </div>
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
      /* cardNum: 0 */
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
              location: data.location,
            });
          });
        });
    },
  },
  computed: {
    filteredCards() {
      // filter by date
      if (store.dateFrom != "") {
        if (store.dateTo != "") {
          // vrati sve unutar odabranih datuma
          return this.cards.filter(
            (card) =>
              card.startDate >= store.dateFrom && card.endDate <= store.dateTo
          );
        }
        // vrati samo one nakon odabranog startDate
        return this.cards.filter((card) => card.startDate >= store.dateFrom);
      }

      // filter by name
      let naziv = this.store.nameFilter;
      let newCards = [];
      if (store.nameFilter != "") {
        for (let card of this.cards) {
          if (card.title.indexOf(naziv) >= 0) {
            newCards.push(card);
          }
        }
        return newCards;
      }

      // filter by location
      let lokacija = this.store.locationFilter;
      let newCards1 = [];
      if (store.locationFilter != "") {
        for (let card of this.cards) {
          if (card.location.indexOf(lokacija) >= 0) {
            newCards1.push(card);
          }
        }
        return newCards1;
      }

      return this.cards;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-lane {
  margin: 6em 25px;
}
h2 {
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
}
#category {
  display: flex;
  border-bottom: 1px solid grey;
}
#lane {
  overflow: auto;
 // white-space: nowrap;
  padding: 0.75em 0;
  display: flex;
  /* background-color: rgb(238, 238, 238); */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
}
</style>
