<template>
  <div
    v-if="this.card_info.category == this.lane_info.title"
    class="card"
    style="width: 18rem"
  >
    <!-- <div v-if="this.card_info.startDate > this.store.dateFrom"> -->
      <img :src="card_info.eventImage" class="card-img-top" alt="pic" />
      <div class="card-body">
        <h3 class="card-title">{{ this.card_info.title }}</h3>
        <p class="on-card-info">
          <span class="material-icons">place</span> {{ card_info.location }}
        </p>
        <p class="on-card-info">
          <span class="material-icons">event</span> {{ card_info.startDate }}
        </p>
        <p class="on-card-info">
          <span class="material-icons">schedule</span> {{ card_info.startTime }}
        </p>
        <router-link
          class="rutlink"
          tag="button"
          :to="{ path: '/EventInfo', query: { card: this.card_info } }"
        >
          More
        </router-link>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "EventCard",
  props: {
    card_info: Object,
    lane_info: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: 1em 2em;
  display: inline-block;
  min-width: fit-content;
}
.card-img-top {
  width: 300px;
  height: 200px;
}
h3 {
  font-size: 160%;
}
.rutlink {
  margin: 0.25em auto;
  border: 1px solid skyblue;
  border-radius: 16px;
  background-color: white;
  padding: 0.25em 1em;
}
/* .card-title{
  text-align: left;
} */
.on-card-info {
  //paragraphs: location, time, date
  margin: 0 auto 0.5em auto;
  display: flex;
}
.material-icons {
  margin-right: 0.25em;
}
</style>
