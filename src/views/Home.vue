<template>
  <div class="home">
    <!-- <tool-bar :user_status="$attrs.user_status" /> -->
    <div class="toolbar-wrap">
      <div class="toolbar">
        <span class="material-icons tool-icon" @click="showCalendar"
          >date_range</span
        >
        <span class="material-icons tool-icon">filter_list</span>
        <span
          id="add-placeholder"
          class="material-icons tool-icon"
          style="color: grey"
          v-if="!this.$attrs.user_status"
          @click="addEvent"
          >add</span
        >
        <router-link
          id="add-loggedIn"
          class="material-icons tool-icon"
          style="color: skyblue"
          v-if="this.$attrs.user_status"
          to="/addEvent"
          >add</router-link
        >
      </div>
      <!--  DROPDOWNS  -->
      <div class="tools">
        <div class="calendar-div" v-if="calendarOpen">
          <div class="uh">
            <span style="width: fit-content; margin: auto"
              >When do You want to go?</span
            >
            <span class="material-icons" id="cancel" @click="cancel">
              highlight_off
            </span>
          </div>
          <div class="date-from">
            <div class="calendar-tag">From:</div>
            <input
              type="date"
              class="calendar"
              id="date-from"
              name="calendar"
              v-model="date"
            />
          </div>
          <!-- <div class="decoration-arrow">
          <span class="material-icons"> south </span>
        </div> -->
          <div class="date-to">
            <div class="calendar-tag">To:</div>
            <input type="date" class="calendar" id="date-to" name="calendar" />
          </div>
          <div class="errorInDate">
            {{ this.err }}
          </div>
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

      <!-- pomoc; kasnije cu obrisat -->
      <div class="applied-filters">
        <div style="border-radius: 2px; margin: 0.5em">
          <strong>applied filters:</strong>
        </div>
        <div class="filter">
          <div>date from: {{ dateFrom }}</div>
          <div>date to: {{ dateTo }}</div>
          <!-- <div>jos jedan

        </div>
        <div>
          i jos jedan
        </div>
        <div>i jos jedan</div>
        <div>i jos</div> -->
        </div>
      </div>
    </div>
    <category-lane
      v-for="lane in this.store.lanes"
      :key="lane.id"
      :lane_info="lane"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryLane from "@/components/CategoryLane.vue";
import store from "@/store.js";
export default {
  name: "Home",
  components: {
    CategoryLane,
  },
  data() {
    return {
      store,
      calendarOpen: false,
      dateFrom: "",
      dateTo: "",
      /* default date-from is today: https://renatello.com/vue-js-input-date/ */
      date: new Date().toISOString().substr(0, 10),
      err: "",
    };
  },
  mounted() {
    /* this.applyDateFilter() */
  },
  methods: {
    showCalendar() {
      this.calendarOpen == false
        ? (this.calendarOpen = true)
        : (this.calendarOpen = false);
    },
    applyDateFilter() {
      this.calendarOpen = false;
      this.dateFrom = document.getElementById("date-from").value;
      this.dateTo = document.getElementById("date-to").value;

      this.store.dateFrom = this.dateFrom;
      this.store.dateTo = this.dateTo;

      if (this.dateTo < this.dateFrom && this.dateTo !== "") {
        this.dateTo = "";
        /* alert("Please pick a valid date to:)"); */
        this.err = "Date to has to be larger than date from."
        setTimeout(() => {
          this.err = "";
        }, 4000);
        this.calendarOpen = true;
      }
      console.log("Date from: ", this.dateFrom);
      console.log("Date to: ", this.dateTo);
    },
    cancel() {
      this.calendarOpen = false;
    },
    addEvent() {
      if (this.$attrs.user_status == true) {
        // jump to: AddEvent.vue
      } else {
        alert("LogIn to use this feature");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
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
  border-top: 1px dotted #111;
  padding-top: 0.5em;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-top: -4em;
}
.date-from,
.date-to {
  /* border: 1px solid red; */
  width: 70%;
  display: flex;
  align-items: center;
  margin: 0.5em auto;
}
/* .decoration-arrow{
  display: flex;
  justify-content: center;
  padding-top: .2em;
} */
.calendar {
  margin: 0.2em auto 0;
  justify-self: center;
  border-radius: 8px;
  border: 1px dotted #111;
  /* border:1px solid gold; */
}
.calendar-tag {
  width: 20%;
  align-self: flex-end;
  /* border: 1px solid blue; */
}
.errorInDate{
  margin: .5em;
  color:red;
  font-size: 80%;
}
#apply-button {
  background-color: white;
  border: 1px solid skyblue;
  padding: 0.2em 1em;
  margin: 1em auto;
  color: #2c3e50;
  border-radius: 16px;
}
#apply-button:hover {
  box-shadow: 3px 3px 6px skyblue;
  opacity: 0.88;
}
.uh {
  display: flex;
  width: 90%;
  margin: 0.25em auto;
  justify-content: space-between;
}
#cancel {
  color: red;
}
#cancel:hover {
  cursor: pointer;
  font-weight: bold;
}
.applied-filters {
  /* border: 1px solid green; */
  margin: 2rem;
}
.filter {
  display: flex;
  flex-wrap: wrap;
  * {
    border: 1px solid #111;
    margin: 0.5em auto;
    padding: 0.25em;
    border-radius: 4px;
  }
}
</style>