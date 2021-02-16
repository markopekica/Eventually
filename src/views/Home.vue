<template>
  <div class="home">
    <!-- <tool-bar :user_status="$attrs.user_status" /> -->
    <div class="toolbar-wrap">
      <div class="toolbar">
        <span class="material-icons tool-icon" @click="showCalendar"
          >date_range</span
        >
        <span class="material-icons tool-icon" @click="showFilters"
          >filter_list</span
        >
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
        <!--  Ovdje pocinju filteri  -->
        <div class="filteri" v-if="filtersOpen">
          <div class="">
            <span style="width: fit-content; margin: auto"
              >View events by their name or their location</span
            >
            <span class="material-icons" id="cancel" @click="cancel">
              highlight_off
            </span>
          </div>
          <div class="filterByName">
            <input
              type="text"
              class="filterBy_input"
              id="filterByName"
              placeholder="Event name"
              v-model="store.nameFilter"
            />
          </div>
          <br />
          <div class="filterByLocation">
            <input
              type="text"
              class="filterBy_input"
              id="filterByLocation"
              placeholder="Event location"
              v-model="store.locationFilter"
            />
          </div>
          <button
            id="apply-button"
            type="button"
            @click="applyFilters"
            class="btn btn-primary"
          >
            ok
          </button>
        </div>
        <!--  Ovdje pocinje kalendar  -->
        <div class="calendar-div" v-if="calendarOpen">
          <div class="uh">
            <span style="width: fit-content; margin: auto"
              >Search events by date</span
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
      <div class="applied-filters" v-if="dateTo != '' || dateFrom != ''">
        <div style="border-radius: 2px; margin: 0.5em">
          <p id="filter-instruction"><strong>applied filters:</strong></p>
          <p id="hidden-info">To restart filters reload the page</p>
        </div>
        <div class="filter">
          <div v-if="dateFrom != ''">date from: {{ dateFrom }}</div>
          <div v-if="dateTo != ''">date to: {{ dateTo }}</div>
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
      filtersOpen: false,
      filterByName: "",
      filterByLocation: "",
      /* default date-from is today: https://renatello.com/vue-js-input-date/ */
      date: new Date().toISOString().substr(0, 10),
      err: "",
    };
  },
  methods: {
    showFilters() {
      /* this.filtersOpen == false
        ? (this.filtersOpen = true)
        : (this.filtersOpen = false); */
      if (this.filtersOpen == false) {
        this.filtersOpen = true
        if (this.calendarOpen == true) {this.calendarOpen = false}
      } else {
        this.filtersOpen = false
      }
    },
    applyFilters() {
      this.filtersOpen = false;
      this.filterByName = document.getElementById("filterByName").value;
      this.filterByLocation = document.getElementById("filterByLocation").value;
      console.log(this.filterByName);
    },
    showCalendar() {
      this.calendarOpen == false
        ? (this.calendarOpen = true, this.filtersOpen = false)
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
        this.err = "Date to has to be larger than date from.";
        setTimeout(() => {
          this.err = "";
        }, 4000);
        this.calendarOpen = true;
      }
      /* console.log("Date from: ", this.dateFrom);
      console.log("Date to: ", this.dateTo); */
    },
    cancel() {
      this.calendarOpen = false;
      this.filtersOpen = false;
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
  text-decoration: none;
  cursor: pointer;
}
.tool-icon:hover {
  //box-shadow: 4px 4px 0px 0px skyblue;
  box-shadow: 0em 0 0.75em 0.06em skyblue;
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
 /* border: 1px solid red;  */
  width: 70%;
  display: flex;
  align-items: center;
  margin: 0.5em auto;
}
.calendar {
  margin: 0.2em auto 0;
  justify-self: center;
  border-radius: 8px;
  border: 2px solid #dadada;
  /* border:1px solid gold; */
}
.calendar:hover {
  border-color: rgb(97, 97, 97);
}

.calendar-tag {
  width: 20%;
  align-self: flex-end;
}

.filteri {
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

.filterByName,
.filterByLocation {
  width: 70%;
  display: flex;
  align-items: center;
  margin: 0.5em auto;
}
.filterBy_input {
  margin: 0.2em auto 0;
  justify-self: center;
  border-radius: 8px;
  border: 2px solid #dadada;
}
.filterBy_input:hover {
    border-color: rgb(97, 97, 97);
  }

.errorInDate {
  margin: 0.5em;
  color: red;
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
  //txt na kalendaru: kad zelis ic?
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
::-webkit-input-placeholder {
  font-style: italic;
}
// prikaz odabranih filtra
#hidden-info {
  display: none;
  color: red;
}
#filter-instruction:hover + #hidden-info {
  display: block;
}
</style>
