<template>
  <div class="category-lane">
    <div id="category">
      <h3>{{ category }}</h3>
    </div>
    <div id="lane">
      <card />
      <card />
      <card />
      <card />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'CategoryLane',
  components: {
    Card
  },
  props: {
    category: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-lane{
  margin: 4em 25px;
  /* border: 1px solid pink; */
}
#category{
  display: flex;
  border-bottom: 1px solid grey;
}
#lane{
  /* display: flex; */
  overflow: auto;
  white-space: nowrap;
}
a {
  color: #42b983;
}
</style>
