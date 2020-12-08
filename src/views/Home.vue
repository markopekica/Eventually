<template>
  <div class="home">
    <tool-bar />
    <category-lane
      v-for="lane in lanes"
      :key="lane.id"
      :lane_info="lane"
    />
    <!-- <event-card
      v-for="eventCard in cards"
      :key="eventCard.id"
      :card_info="eventCard"
    /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryLane from "@/components/CategoryLane.vue";
/* import EventCard from "@/components/EventCard.vue"; */
import ToolBar from "@/components/ToolBar.vue";
import store from "@/store.js";

export default {
  name: "Home",
  components: {
    ToolBar,
    CategoryLane,
    /* EventCard, */
  },
  data() {
    return store;
  },
};
</script>


<style lang="scss" scoped>
</style>