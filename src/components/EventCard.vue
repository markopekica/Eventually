<template>
  <div v-if="this.card_info.category == this.lane_info.title" class="card" style="width: 18rem">
    <img :src="card_info.url" class="card-img-top" alt="pic" />
    <div class="card-body">
      <h5 class="card-title">{{ card_info.title }}</h5>
      <p class="on-card-info"><span class="material-icons">place</span> {{ card_info.location }}</p>
      <p class="on-card-info"><span class="material-icons">event</span> {{ card_info.date }}</p>
      <p class="on-card-info"><span class="material-icons">schedule</span> {{ card_info.time }}</p>
      <router-link 
        class="rutlink" 
        tag="button"
        :to="{path: '/EventInfo', query:{card: this.card_info}}">
        More
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    card_info: Object,
    lane_info: Object
  }
};
</script>

<style scoped lang="scss">
.card {
  margin: 1em 2em;
  display: inline-block;
}
.rutlink{
  margin: .25em auto;
  border: 1px solid skyblue;
  border-radius: 16px;
  background-color: white;
  padding: .25em 1em;
}
/* .card-title{
  text-align: left;
} */
.on-card-info{  //paragraphs: location, time, date
  margin: 0 auto .5em auto;
  display: flex;
}
.material-icons{
  margin-right: .25em;
}
</style>
