<template>
  <div class="user-profile-page">
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
          <h1>My Profile</h1>
        </div>
        <div class="col-2">
          <span class="logout-link-wrapper" @click="logout">
            <router-link id="logout" to="/"
              ><span class="material-icons">logout</span>Log Out</router-link
            >
          </span>
        </div>
      </div>
    </div>
    <div
      class="page-content page-container"
      id="page-content"
      v-if="EnableEdit == false"
    >
      <div class="col-sm-12">
        <div>
          <img
            :src="slika"
            style="
              box-shadow: 0 0 1px #111;
              width: 220px;
              height: 220px;
              border-radius: 50%;
              object-fit: cover;
            "
            alt="uuh"
          />
        </div>

        <p class="usernamen">{{ covik }}</p>
      </div>
      <!-- <button type="submit" class="EditP" @click="Edit">Edit profile </button> -->
      <span id="olovka" class="material-icons" @click="Edit"> mode_edit </span>
    </div>

    <div
      class="page-content page-container"
      id="page-content"
      v-if="EnableEdit == true"
    >
      <form @submit.prevent="Save">
        <croppa
          v-model="croppa"
          :width="280"
          :height="280"
          placeholder="Add a new profile image."
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
          :image-border-radius="300"
        >
          <div class="testdiv">
            <i class="large material-icons test">insert_photo</i>
          </div>
        </croppa>
        <br />
        <div class="form-group">
          <label for="newUserName">Enter your new username: </label>
          <input
            v-model="newUserName"
            type="text"
            class="form-control"
            placeholder="Username"
          />
        </div>
        <br />
        <button type="button" class="btn btn-primary" @click="Save">
          Save changes
        </button>
      </form>
    </div>

    <!-- HOSTED EVENTS -->
    <div class="my-events" style="margin: 6em auto">
      <span class="material-icons"> admin_panel_settings </span>
      <span>Events I hosted:</span>
      <div class="hosted-events-lane">
        <event-card
          v-for="eventCard in cardsHosted"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>

      <!-- LIKED EVENTS -->
      <span id="heart-icon" class="material-icons" style="color: #e0115f">
        favorite
      </span>
      <div class="like-lane">
        <event-card
          v-for="eventCard in cardsHeart"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>

      <!-- EYE EVENTS -->
      <span
        id="eye-icon"
        class="material-icons"
        style="color: skyblue; margin: auto"
      >
        visibility
      </span>
      <div class="eye-lane">
        <event-card
          v-for="eventCard in cardsEye"
          :key="eventCard.id"
          :card_info="eventCard"
        >
        </event-card>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase, db, storage } from "@/firebase";
import store from "@/store.js";
import EventCard from "../components/EventCard.vue";
export default {
  name: "UserProfile",
  components: {
    EventCard,
  },
  data() {
    return {
      croppa: null,
      store,
      cards: [],
      cardsHosted: [],
      cardsHeart: [],
      cardsEye: [],
      usr: this.$attrs.user.email,
      newUserName: "",
      newImageUrl: "",
      covik: "",
      slika: "",
      ajdi: "",
      mojaSlika: "",
      EnableEdit: false,
    };
  },
  mounted() {
    this.getCards();
    this.getData();
    this.getHosted();
  },
  methods: {
    Edit() {
      this.EnableEdit = true;
    },
    Save() {
      console.log("trebamo ovaj gledati", this.ajdi);
      if (this.ajdi) {
        db.collection("userProfile" + this.$attrs.user.email + "/")
          .doc(this.ajdi)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });

        /* https://javascript.tutorialink.com/how-to-delete-all-files-in-a-firebase-storage-directory/ */
        const storageRef = firebase
          .storage()
          .ref("userProfile/" + this.$attrs.user.email + "/");
        storageRef.listAll().then((listResults) => {
          const promises = listResults.items.map((item) => {
            return item.delete();
          });
          Promise.all(promises);
        });
      }
      this.croppa.generateBlob((blobData) => {
        let imageName =
          "userProfile/" + this.$attrs.user.email + "/" + Date.now() + ".png";
        this.mojaSlika = imageName;

        storage
          .ref(imageName)
          .put(blobData)
          .then((result) => {
            console.log(result);

            result.ref
              .getDownloadURL()
              .then((url) => {
                console.log("Javni url", url);

                const userName = this.newUserName;

                db.collection("userProfile" + this.$attrs.user.email + "/")
                  .add({
                    url: url,
                    usrName: userName,
                    email: this.$attrs.user.email,
                  })
                  .then((doc) => {
                    console.log("Spremljeno", doc);
                    this.newUserName = "";
                    this.croppa = null;

                    this.getData();
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
      this.EnableEdit = false;
    },
    getData() {
      db.collection("userProfile" + this.$attrs.user.email + "/")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.ajdi = doc.id;
            this.covik = data.usrName;
            this.slika = data.url;
          });
        });
    },
    getHosted() {
      db.collection("events")
        .get()
        .then((query) => {
          this.cardsHosted = [];

          query.forEach((doc) => {
            const data = doc.data();
            if (data.author === this.usr) {
              this.cardsHosted.push({
                id: doc.id,
                time: data.posted_at,
                eventImage: data.eventImage,
                title: data.eventTitle,
                author: data.author,
                organization: data.org,
                additionalInfo: data.additionalInfo,
                category: data.category,
                price: data.price,
                startDate: data.startDate,
                endDate: data.endDate,
                startTime: data.startTime,
                endTime: data.endTime,
                location: data.location,
              });
            }
          });
        });
    },
    getCards() {
      db.collection("events")
        .get()
        .then((query) => {
          this.cardsHeart = [];
          this.cardsEye = [];

          query.forEach((event) => {
            const data = event.data();

            db.collection("events")
              .doc(event.id)
              .collection("hearts")
              .get()
              .then((query) => {
                query.forEach((hearts) => {
                  if (hearts.data().usr == this.usr) {
                    this.cardsHeart.push({
                      id: event.id,
                      time: data.posted_at,
                      eventImage: data.eventImage,
                      title: data.eventTitle,
                      author: data.author,
                      organization: data.org,
                      additionalInfo: data.additionalInfo,
                      category: data.category,
                      price: data.price,
                      startDate: data.startDate,
                      endDate: data.endDate,
                      startTime: data.startTime,
                      endTime: data.endTime,
                      location: data.location,
                    });
                  }
                });
              });

            db.collection("events")
              .doc(event.id)
              .collection("eye")
              .get()
              .then((query) => {
                query.forEach((eye) => {
                  if (eye.data().usr == this.usr) {
                    this.cardsEye.push({
                      id: event.id,
                      time: data.posted_at,
                      eventImage: data.eventImage,
                      title: data.eventTitle,
                      author: data.author,
                      organization: data.org,
                      additionalInfo: data.additionalInfo,
                      category: data.category,
                      price: data.price,
                      startDate: data.startDate,
                      endDate: data.endDate,
                      startTime: data.startTime,
                      endTime: data.endTime,
                      location: data.location,
                    });
                  }
                });
              });
          });
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed out!");
        })
        .catch((error) => {
          console.log("something happened", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-input-placeholder {
  font-style: italic;
}

#olovka {
  color: skyblue;
}

#olovka:hover {
  cursor: pointer;
}

.usernamen {
  font-size: 160%;
}

#logout {
  color: #ee5a6f;
  font-weight: 700;
  display: flex;
}

#logout-button:hover {
  box-shadow: 1px 1px 1px crimson;
}
.hosted-events-lane,
.like-lane,
.eye-lane {
  width: 90vw;
  margin: 0.2em auto 4em auto;
  display: flex;
  overflow: auto;
  min-height: fit-content;
  border-top: 1px solid gray;
}
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.croppa-container {
  background-color: rgb(238, 238, 238);
  border: 2px solid grey;
  border-radius: 50%;
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

.form-control {
  border-radius: 10px;
}
.form-control:hover {
  border-color: rgb(97, 97, 97);
}

.SaveChange:hover {
  cursor: pointer;
}
.container {
  margin: 1em auto;
}
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-group {
  margin-top: 10px;
  display: inline-block;
}
.btn-primary {
  border: 1px solid black;
  background-color: skyblue;
  color: black;
}
.btn-primary:hover {
  opacity: 1;
  background-color: #111;
  color: skyblue;
}
.EditP {
  border: 1px solid black;
  background-color: skyblue;
  color: black;
}
</style>
