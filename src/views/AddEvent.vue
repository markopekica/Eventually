<template>
  <div class="addEvent">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/"
            ><span class="material-icons" style="color: black"
              >arrow_back_ios</span
            ></router-link
          >
        </div>
        <div class="col-8">
          <h1>Create Event</h1>
        </div>
      </div>
    </div>

    <div class="addEventContent">
      <hr class="solid" />
      <form @submit.prevent="postEvent">
        <h2>Basic info</h2>
        <h6>
          Name your event and tell event-goers why they should come. <br />
          Add details that highlight what makes it unique.
        </h6>
        <br />
        <croppa
          v-model="croppa"
          :width="500"
          :height="270"
          placeholder="Drag & drop or click to add main event image."
          placeholder-color="#111"
          :placeholder-font-size="20"
          canvas-color="transparent"
          :accept="'image/*'"
          :show-remove-button="true"
          remove-button-color="red"
          :remove-button-size="35"
          :show-loading="true"
          :loading-size="50"
          :prevent-white-space="true"
        >
          <div class="testdiv">
            <i class="large material-icons test">insert_photo</i>
          </div>
        </croppa>
        <br />
        <div class="form-group">
          <label for="NameEvent">How would you like to name your event?</label>
          <input
            v-model="newEventName"
            type="text"
            id="NameEvent"
            class="form-control"
            placeholder="Event name"
          />
        </div>
        <div class="form-group">
          <label for="NameEvent"
            >Do you represent a well known organization?</label
          >
          <input
            v-model="newEventOrg"
            type="text"
            id="NameEvent"
            class="form-control"
            placeholder="Organizer"
          />
        </div>
        <br />
        <textarea
          v-model="newEventMoreInfo"
          rows="10"
          cols="59"
          placeholder="Add additional info..."
        ></textarea>
        <!-- info o eventu -->
      </form>

      <form @submit.prevent="postEvent">
        <!-- Odabir kategorije -->
        <div class="odvoji">
          <select name="tags" v-model="newEventCategory" class="tag-select">
            <option value="">Category</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Art">Art</option>
            <option value="Food/Drinks">Food and drinks</option>
            <option value="Sports/Outdoors">Sports/Outdoors</option>
          </select>

          <!-- Odabir cijene -->
          <input
            type="text"
            v-model="newEventPrice"
            list="currency"
            placeholder="Price"
          />
          <datalist id="currency">
            <option>$</option>
            <option>€</option>
            <option>£</option>
            <option>Kn</option>
          </datalist>
        </div>
      </form>

      <hr class="solid" />

      <form @submit.prevent="postEvent">
        <h2>Date & Time</h2>
        <h6>
          Tell event-goers when your event starts and ends <br />
          so they can make plans to attend.
        </h6>

        <div class="datumi">
          <!-- Odabir datuma -->
          <div class="datumi-posebno">
            <label for="start">Start date:</label>
            <input
              v-model="newEventStartDate"
              type="date"
              class="date-input"
              value="0000-00-00"
              min="2020-01-01"
              max="2022-12-31"
            />
          </div>
          <div class="datumi-posebno">
            <label for="end">End date:</label>
            <input
              v-model="newEventEndDate"
              type="date"
              class="date-input"
              value="0000-00-00"
              min="2020-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <br />
        <div class="sati">
          <div class="sati-posebno">
            <label for="start">Start time:</label>
            <input
              type="time"
              v-model="newEventStartTime"
              class="time-input"
              value="10:00"
            />
          </div>
          <div class="sati-posebno">
            <label for="end">End time:</label>
            <input
              type="time"
              v-model="newEventEndTime"
              class="time-input"
              value="00:00"
            />
          </div>
        </div>
      </form>
      <br />
      <hr class="solid" />

      <form>
        <h2>Location</h2>
        <h6>Let your attendees know where your event will be taking place</h6>
      </form>
      <form @submit.prevent="postEvent">
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import "vue-croppa/dist/vue-croppa.css";
import Vue from "vue";
import Croppa from "vue-croppa";

import { db, storage } from "@/firebase.js";

Vue.use(Croppa);

export default {
  name: "addEvent",

  data() {
    return {
      croppa: null,
      eventImage: Blob,
      newEventName: "",
      newEventOrg: "",
      newEventMoreInfo: "",
      newEventCategory: "",
      newEventPrice: "",
      newEventStartDate: "",
      newEventEndDate: "",
      newEventStartTime: "",
      newEventEndTime: "",
    };
  },

  methods: {
    postEvent() {
      this.croppa.generateBlob((blobData) => {

        let imageName = "posts/" + this.$attrs.user.email + "/" + Date.now() + ".png";

        console.log(imageName)

        storage
          .ref(imageName)
          .put(blobData)
          .then((result) => {
            // Uspjesna linija
            result.ref
              .getDownloadURL()
              .then((url) => {
                console.log("Javni link: ", url);

                const eventName = this.newEventName;
                const eventOrg = this.newEventOrg;
                const eventMoreInfo = this.newEventMoreInfo;
                const eventCategory = this.newEventCategory;
                const eventPrice = this.newEventPrice;
                const eventStartDate = this.newEventStartDate;
                const eventEndDate = this.newEventEndDate;
                const eventStartTime = this.newEventStartTime;
                const eventEndTime = this.newEventEndTime;
                //    const eventLocation = ??

                db.collection("events")
                  .add({
                    eventTitle: eventName,
                    author: this.$attrs.user.email,
                    posted_at: Date.now(),
                    eventImage: url,
                    org: eventOrg,
                    additionalInfo: eventMoreInfo,
                    category: eventCategory,
                    price: eventPrice,
                    startDate: eventStartDate,
                    endDate: eventEndDate,
                    startTime: eventStartTime,
                    endTime: eventEndTime,
                  })
                  .then((doc) => {
                    console.log("Spremljeno", doc);

                    this.newEventName = "";
                    this.croppa.remove();
                    this.newEventOrg = "";
                    this.newEventMoreInfo = "";
                    this.newEventCategory = "";
                    this.newEventPrice = "";
                    this.newEventStartDate = "";
                    this.newEventEndDate = "";
                    this.newEventStartTime = "";
                    this.newEventEndTime = "";
                  })
                  .catch((e) => {
                    console.error(e);
                  });
              })
              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 1em auto;
}

::-webkit-input-placeholder {
  font-style: italic;
}

.col-2,
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.croppa-container {
  background-color: rgb(238, 238, 238);
  border: 2px solid grey;
  border-radius: 8px;
  margin: auto;
}

.croppa-container:hover {
  opacity: 1;
  background-color: white;
  border-color: skyblue;
  box-shadow: 0 0 20px #9ecaed;
}
.test {
  margin: auto;
  font-size: 60px;
  color: rgb(32, 32, 32);
  margin-bottom: 50px;
}
.testdiv {
  display: flex;
  min-height: 200px;
  margin-top: -200px;
}

form {
  //border: 1px solid;
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
  .btn-primary {
    max-width: 80px;
    margin: auto;
  }
}

.addEventContent {
  //border: 1px solid blue;
  justify-content: center;
}

#NameEvent {
  border-radius: 10px;
}
#NameEvent:hover {
  border-color: rgb(97, 97, 97);
}

.form-group {
  margin-top: 10px;
  display: inline-block;
}

textarea {
  border: 2px solid #dadada;
  border-radius: 10px;
  outline: none;
}

.tag-select {
  margin: 10px;
  max-width: 165px;
  padding-left: 15px;
  border: 3px solid #dadada;
  border-radius: 10px;
}
.tag-select:focus {
  outline: none;
  border-color: skyblue;
}
.tag-select:hover {
  border-color: rgb(97, 97, 97);
}

textarea:hover {
  border-color: rgb(97, 97, 97);
}

.odvoji {
  //border: 1px solid lime;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-left: 40px;
  input {
    margin: auto;
    padding-left: 20px;
    border: 3px solid #dadada;
    border-radius: 10px;
    height: 45px;
    max-width: 165px;
    outline: none;
  }
  input:focus {
    outline: none;
    border-color: skyblue;
  }
  input:hover {
    border-color: rgb(97, 97, 97);
  }
}

.datumi {
  //border: 1px solid yellowgreen;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: -15px;
  display: flex;
  justify-content: space-around;
  label {
    margin: 10px;
  }
  input {
    width: 175px;
    border: 2px solid #dadada;
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 10px;
    outline: none;
  }
  .date-input:hover {
    border-color: rgb(97, 97, 97);
  }
}

.sati {
  //border: 1px solid skyblue;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  label {
    margin: 10px;
  }
  input {
    width: 175px;
    height: fit-content;
    border: 2px solid #dadada;
    border-radius: 10px;
    margin: auto;
    padding-left: 63px;
    padding-right: 10px;
    outline: none;
  }
  .time-input:hover {
    border-color: rgb(97, 97, 97);
  }
}

.datumi-posebno {
  padding-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sati-posebno {
  padding-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.solid {
  max-width: 700px;
}

h6 {
  font-size: 15px;
}

.form-group {
  margin-bottom: 10px;
}

.btn-primary {
  border: 1px solid black;
  background-color: skyblue;
  color: black;
}

.btn-primary:hover {
  background-color: skyblue;
}

select {
  font-size: 0.9rem;
  padding: 10px;
}
</style>
