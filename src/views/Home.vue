<template>
  <div class="home">
    <tool-bar :user_status="$attrs.user_status" />
    <!-- <div>
      {{ $attrs.user_status }}
    </div> -->
    <category-lane
      v-for="lane in lanes"
      :key="lane.id"
      :lane_info="lane"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryLane from "@/components/CategoryLane.vue";
import ToolBar from "@/components/ToolBar.vue";
import store from "@/store.js";
export default {
  name: "Home",
  components: {
    ToolBar,
    CategoryLane
  },
  data() {
    return store;
  },
};
</script>


<style lang="scss" scoped>
</style>