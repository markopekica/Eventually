<template>
  <div class="toolbar-wrap">
    <div class="toolbar">
      <span class="material-icons tool-icon" @click="showCalendar"
        >date_range</span
      >
      <span class="material-icons tool-icon">filter_list</span>
      <!-- <span
        id="add"
        class="material-icons tool-icon"
        v-bind:style="[user_status ? { color: 'skyblue' } : { color: 'grey' }]"
        >add</span
      > -->
      <span
        id="add-placeholder"
        class="material-icons tool-icon"
        style="color: grey"
        v-if="!user_status"
        @click="addEvent"
        >add</span
      >
      <router-link
        id="add-loggedIn"
        class="material-icons tool-icon"
        style="color: skyblue"
        v-if="user_status"
        to="/addEvent"
        >add</router-link
      >
    </div>
    <!--  DROPDOWNS  -->
    <div class="tools">
      <div class="calendar-div" v-if="calendarOpen">
        pick when u go
        <input type="date" id="calendar" name="calendar" /> <br />
        <!-- authenticated: {{ user_status }} -->
        <button
          id="apply-button"
          type="button"
          @click="applyDateFilter"
          class="btn btn-primary"
        >
          ok
        </button>
      </div>
      <!--  calendar  -->
    </div>
  </div>
</template>
<script>
export default {
  name: "ToolBar",
  props: {
    user_status: Boolean,
  },
  data() {
    return {
      calendarOpen: false,
    };
  },
  methods: {
    showCalendar() {
      this.calendarOpen == false
        ? (this.calendarOpen = true)
        : (this.calendarOpen = false);
    },
    applyDateFilter() {
      this.calendarOpen = false;
    },
    addEvent() {
      if (this.user_status == true) {
        // move to CreateEvent.vue view
      } else {
        alert("LogIn to use this feature");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.toolbar {
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
.tool-icon {
  cursor: pointer;
}
.calendar-div {
  margin: auto;
  border-bottom: 1px dotted #111;
  /* border-top: 1px dotted #111; */
  /* background-color: snow; */
  padding-top: .5em;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-top: -4em;
/* background: rgb(17,17,17);
background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,1) 1%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 100%);
 */
}
#calendar {
  margin: 0.2em auto 0;
  max-width: 42%;
  /* background-color: #111;
  color: snow; */
}
#apply-button {
  background-color: white;
  border: 1px solid skyblue;
  opacity: .8;
  padding: 0.2em 1em;
  margin: 1em auto;
  color: #2c3e50;
  border-radius: 16px;
}
#apply-button:hover{
  box-shadow: 3px 3px 6px skyblue;
  opacity: 1;
}
</style>
