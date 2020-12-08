<template>
  <div class="card" style="width: 18rem">
    <img :src="card_info.url" class="card-img-top" alt="pic" />
    <div class="card-body">
      <h5 class="card-title">{{ card_info.title }}</h5>
      <p>{{ card_info.location }}</p>
      <p>{{ card_info.date }} - {{ card_info.time }}</p>
      <router-link to="/EventInfo"
        ><a id="card-button" href="#" type="button"
          >Full info</a
        ></router-link
      >
      <!-- <event-info :parentmessage="msg" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    card_info: Object
  },
};
</script>

<style scoped lang="scss">
.card {
  margin: 1em 2em;
  display: inline-block;
}
#card-button {
  background-color: snow;
  border: 1px solid skyblue;
  color: #2c3e50;
  border-radius: 16px;
  margin: 0.5em 0;
  /* box-shadow: 1px 2px 4px skyblue; */
}
</style>
