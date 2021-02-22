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
      <hr v-if="!loading" class="solid" />
      <img v-if="loading" class = "loading" :src="require('@/assets/loading.gif')"/>
      <form v-if="!loading" @submit.prevent="postEvent">
        <h2>Basic info</h2>
        <h6>
          Name your event and tell event-goers why you think they should attend. <br />
          Add details that highlight what makes it unique.
        </h6>
        <br />
        <croppa
          v-model="croppa"
          :width="500"
          :height="280"
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
            class="form-control"
            placeholder="Event name"
          />
        </div>
        <div class="form-group">
          <label for="NameEvent"
            >What is the name of the organization you're presenting?</label
          >
          <input
            v-model="newEventOrg"
            type="text"
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

      <form v-if="!loading" @submit.prevent="postEvent">
        <!-- Odabir kategorije -->
        <div class="odvoji">
          <select name="tags" v-model="newEventCategory" class="tag-select">
            <option value="">Category</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Art">Art</option>
            <option value="Food/Drinks">Food/Drinks</option>
            <option value="Sports/Outdoors">Sports/Outdoors</option>
            <option value="Initiatives/Campaigns">Initiatives/Campaigns</option>
            <option value="Educational">Educational</option>
            <option value="Games">Games</option>
            <option value="Random">Random</option>
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

      <hr v-if="!loading" class="solid" />

      <form v-if="!loading" @submit.prevent="postEvent">
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
      <hr v-if="!loading" class="solid" />

      <form v-if="!loading" @submit.prevent="postEvent">
        <h2>Location</h2>
        <h6>Let attendees know where your event will be taking place.</h6>
        <div class="form-group">
          <input
            v-model="newEventLocation"
            type="text"
            id="loc"
            class="form-control"
            placeholder="address, city"
          />
        </div>
        <br>
      </form>
      <form v-if="!loading" @submit.prevent="postEvent">
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
      loading: false,
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
      newEventLocation: "",
    };
  },

  methods: {
    getImage() {
      // Promise based, omotač oko callbacka

      return new Promise((resolveFn) => {
        this.croppa.generateBlob((blobData) => {
          resolveFn(blobData);
        });
      });
    },
    async postEvent() {
      try {
        this.loading = true;
        let blobData = await this.getImage()
        let imageName = "posts/" + this.$attrs.user.email + "/" + Date.now() + ".png";
        console.log(imageName);
        let result = await storage.ref(imageName).put(blobData);

        let url = await result.ref.getDownloadURL(); //Promise

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
            const eventLocation = this.newEventLocation;

            let doc = await db.collection("events").add({
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
              location: eventLocation,
            });

            console.log("Spremljeno", doc);

            this.newEventName = "";
          //  this.croppa.remove();
            this.newEventOrg = "";
            this.newEventMoreInfo = "";
            this.newEventCategory = "";
            this.newEventPrice = "";
            this.newEventStartDate = "";
            this.newEventEndDate = "";
            this.newEventStartTime = "";
            this.newEventEndTime = "";
            this.newEventLocation = ""; 
      }
      catch (e) {
        console.error("GREŠKA", e);
      }
      this.loading = false;
      this.$router.push("/")
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

.loading {
  width: 400px;
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

.form-control {
  border-radius: 10px;
}
.form-control:hover {
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
  max-width: 210px;
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
  // border: 1px solid lime;
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
    max-width: 120px;
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
  // border: 1px solid yellowgreen;
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
    width: 185px;
    border: 2px solid #dadada;
    border-radius: 10px;
    padding-left: 19px;
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
    width: 185px;
    height: fit-content;
    border: 2px solid #dadada;
    border-radius: 10px;
    margin: auto;
    padding-left: 68px;
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
