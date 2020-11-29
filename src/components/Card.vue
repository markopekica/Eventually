<template>
    <div class="card" style="width: 18rem;">
        <img :src="card_info.url" class="card-img-top" alt="pic">
        <div class="card-body">
            <h5 class="card-title">{{ card_info.title }}</h5>
            <p>{{ card_info.location }}</p>
            <p>{{card_info.date}} - {{ card_info.time }}</p>
            <a id="card-button" href="#" class="btn btn-primary">Full info</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ["card_info"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    margin: 1em 2em;
    display: inline-block;
}
#card-button {
  background-color: #111;
  color: skyblue;
  border: none;
  border-radius: 16px;
  /* padding: 0.5em 1em; */
  margin: 1em 0;
}
</style>
