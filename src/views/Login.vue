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
          <div>
            {{ usr }}
          </div>
          <div v-if="eror" id="error-message-div">
            Error: {{ eror }}
          </div>
          <div v-if="success" id="success-message-div">
            {{ success }}
          </div>
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
      <!-- <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div> -->
      <!-- <button id="login-button" type="button" @click="checkData" class="btn btn-primary">
        Login
      </button> -->
      <div @click="checkData">
      <router-link
        id="login-button"
        class="rutlink"
        tag="button"
        :to="path"
      >
        Login
      </router-link>
    </div>
    </form>
    <div id="register-link">
      <hr />
      <p>
        Don't have an account? You can make one
        <router-link to="/register"><a href="#">here</a></router-link
        >.
      </p>
    </div>
  </div>
</template>
<script>
import firebase from "@/firebase";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      eror: '',
      success: '',
      usr: '',
      path: '',
    };
  },
  methods: {
    checkData() {
      // refresh values after every click; to hide previous message
      this.eror = ''
      this.success = ''
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then ( (user) => {
          if( user ){
            this.usr = "true"
            this.path = "/"
          } else {
            this.usr = 'false'
          }
        })
      .catch( (error) => {
        this.eror = error.message
        /* alert(this.eror) */
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.container{
  margin: 1em auto;
}
.col-2, .col-8{
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
  background-color: snow;
  border: 1px solid skyblue;
  padding: 0.5em 1em;
  margin: 1em 0;
  color: #2c3e50;
  border-radius: 16px;
}
#register-link {
  margin-top: 4em;
}
#error-message-div{
  padding: .5em;
  margin-top: 1em;
  color: crimson;
}
</style>