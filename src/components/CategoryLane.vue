<template>
  <div class="category-lane">
    <div id="category">
      <h3>{{ lane_info.title }}</h3>
    </div>
    <div id="lane">
      <event-card
        v-for="eventCard in cards"
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
export default {
  name: "CategoryLane",
  props: {
    lane_info: Object
  },
  components: {
    EventCard
  },
  data() {
    return store
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-lane {
  margin: 5em 25px;
}
h3{
  font-weight: 600;
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
