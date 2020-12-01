<template>
  <div class="home">
    <tool-bar />
    <category-lane v-for="lane in lanes" :key="lane.id" :lane_info="lane" />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryLane from "@/components/CategoryLane.vue";
import ToolBar from "@/components/ToolBar.vue";

let lanes = [
  { id: "1", title: "Category 1" },
  { id: "2", title: "Category 2" },
];

export default {
  name: "Home",
  components: {
    CategoryLane,
    ToolBar,
  },
  data() {
    return {
      lanes: lanes,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>