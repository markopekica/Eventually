<template>
  <div class="toolbar">
    <span class="material-icons">date_range</span>
    <span class="material-icons">filter_list</span>
    <span id="add" class="material-icons">add</span>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  props: [],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.toolbar {
  /* border: 1px solid black; */
  max-width: 300px;
  margin: auto;
  display: flex;
  padding: 1em;
  justify-content: center;
  margin-top: 0.25em;
  margin-bottom: 4em;
  background-color: #111;
  border-radius: 16px;
  color: skyblue;
}
.toolbar * {
  margin: 0 1em;
}
#add {
  color: grey;
}
</style>
