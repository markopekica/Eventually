<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/">
            <span class="material-icons" style="color: black"
              >arrow_back_ios</span
            >
          </router-link>
        </div>
        <div class="col-8">
          <h1>Login</h1>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <div v-if="eror" id="error-message-div">Error: {{ eror }}</div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          class="form-control"
          type="email"
          v-model="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword1"
          class="form-control"
          type="password"
          v-model="password"
        />
      </div>
      <div @click="checkData">
        <router-link
          id="login-button"
          class="rutlink"
          tag="button"
          :to="trebaSkuzit"
        >
          {{ loginButtonText }}
        </router-link>
      </div>
    </form>
    <div id="register-link">
      <hr id="crta" />
      <p>
        Don't have an account? You can make one
        <router-link to="/register"><a href="#">here</a></router-link
        >.
      </p>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      eror: "",
      usr: "",
      trebaSkuzit: "",
      loginButtonText: "Login",
    };
  },

  methods: {
    checkData() {
      // refresh values after every click; to hide previous message
      this.eror = "";
      this.success = "";
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          if (user) {
            this.usr = "true";
            this.$router.push(
              "/"
            ); /* https://reactgo.com/vue-redirect-to-external-url/ */
          } else {
            this.usr = "false";
          }
        })
        .catch((error) => {
          this.eror = error.message;
          /* alert(this.eror) */
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: 1em auto;
}
.col-2,
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
form {
  max-width: 440px;
  padding: 1em;
  margin: auto;
}
#login-button {
  border: 1px solid skyblue;
  background-color: white;
  border-radius: 16px;
  margin: 1em 0;
  padding: 0.32em 1em;
  /* color: #2c3e50; */
}
#login-button:hover {
  box-shadow: 1px 1px 1px skyblue;
}
#register-link {
  margin-top: 4em;
}
#error-message-div {
  padding: 0.5em;
  margin-top: 1em;
  color: crimson;
}
#crta {
  max-width: 32em;
}
</style>