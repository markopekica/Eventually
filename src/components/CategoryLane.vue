<template>
  <div class="category-lane">
    <div id="category">
      <h3>{{ lane_info.title }}</h3>
    </div>
    <div id="lane">
      <card v-for="Card in cards" :key="Card" :card_info="Card" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

let cards = [
  {
    id: "1",
    title: "event 1",
    url: "https://picsum.photos/id/1042/300/200",
    location: "location_1",
    date: "date",
    time: "time",
  },
  {
    id: "2",
    title: "event 2",
    url: "https://picsum.photos/id/88/300/200",
    location: "location_2",
    date: "date",
    time: "time",
  },
  {
    id: "3",
    title: "event 3",
    url: "https://picsum.photos/id/100/300/200",
    location: "location_3",
    date: "date",
    time: "time",
  },
  {
    id: "4",
    title: "event 4",
    url: "https://picsum.photos/id/1000/300/200",
    location: "location_4",
    date: "date",
    time: "time",
  },
];

export default {
  name: "CategoryLane",
  props: {
    lane_info: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      cards: cards,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-lane {
  margin: 4em 25px;
}
#category {
  display: flex;
  border-bottom: 1px solid grey;
}
#lane {
  overflow: auto;
  white-space: nowrap;
}
</style>
