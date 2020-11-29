<template>
  <div class="home">
    <div class="toolbar">
      <span class="material-icons">date_range</span>
      <span class="material-icons">search</span>
      <span id="add" class="material-icons">add</span>
    </div>
    <category-lane v-for="lane in lanes" :key="lane" :lane_info="lane" />
    <!-- <category-lane category="Category_II"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryLane from '@/components/CategoryLane.vue'

let lanes = [
  {id: '1', title: 'Category 1'},
  {id: '2', title: 'Category 2'}
]

export default {
  name: 'Home',
  components: {
    CategoryLane
  },
  data () {
    return{
      lanes: lanes
    }
  }
}
</script>


<style lang="scss">
.toolbar{
  /* border: 1px solid black; */
  max-width: 300px;
  margin: auto;
  display: flex;
  padding: 1em;
  justify-content: center;
  margin-top: .25em;
  margin-bottom: 4em;
  background-color: #111;
  border-radius: 16px;
  color: skyblue;
}
.toolbar *{
  margin: 0 1em;
}
#add{
  color: grey;
}
</style>