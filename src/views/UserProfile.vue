<template>
  <div class="user-profile-page">
    <span class="logout-link-wrapper" @click="logout">
      <router-link
        id="logout-button"
        class="rutlink"
        tag="button"
        :to="{ path: '/' }"
      >
        Log Out
      </router-link>
    </span>
  </div>
</template>

<script>
import firebase from "@/firebase";
export default {
  name: "UserProfile",
  methods: {
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
#logout-button {
  background-color: snow;
  border: 1px solid darkorange;
  padding: 0.5em 1em;
  margin: 1em 0;
  color: #2c3e50;
  border-radius: 16px;
}
</style>