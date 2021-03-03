<template>
  <div class="card" style="width: 18rem">
    <!-- 
    ovo sam uklonio iz gornjeg diva
      v-if="this.card_info.category == this.lane_info.title"
    kartica se sad filtrira po redu unutar lane komponente
    cini mi se da je to bolje
    sad mogu koristit karticu kao komponentu i na user profilu
    -->
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
        :to="{ path: '/eventInfo', query: { card: this.card_info } }"
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
    //lane_info: Object,
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
  border-radius: 10px;
  box-shadow: 2px 0 0px 2px #111;
  box-shadow: 0.25em 3px 0.4em lightgray;
}
.card-img-top {
  width: 300px;
  height: 200px;

  border-radius: 10px 10px 0 0;
}
h3 {
  // font-size: 10%;
  max-width: 250px;
  overflow: auto;
}
.rutlink {
  border: 1px solid skyblue;
  background-color: white;
  border-radius: 16px;
  margin: 0.25em auto;
  padding: 0.25em 1em;
  outline: none;
}
.rutlink:hover {
  box-shadow: 1px 1px 2px skyblue;
}
.on-card-info {
  //paragraphs: location, time, date
  margin: 0 auto 0.5em auto;
  display: flex;
}
.material-icons {
  margin-right: 0.25em;
}
</style>
