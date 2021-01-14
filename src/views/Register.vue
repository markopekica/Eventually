<template>
  <div class="register-page">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/login"
            ><span class="material-icons" style="color: black"
              >arrow_back_ios</span
            ></router-link
          >
        </div>
        <div class="col-8">
          <h1>Create account</h1>
        </div>
        <div class="col-2"></div>
      </div>
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
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2">Repeat password</label>
        <input
          type="password"
          v-model="repeatPassword"
          class="form-control"
          id="exampleInputPassword2"
        />
      </div>
      <button
        id="register-button"
        type="button"
        @click="checkData"
        class="btn btn-primary"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
import {firebase} from "@/firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      eror: '',
      success: '',
    };
  },
  methods: {
    checkData() {
      // refresh values after every click; to hide previous message
      this.eror = ''
      this.success = ''
      if( this.password == this.repeatPassword ){
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then( () => {
          console.log('Registration Completed')
          this.success = 'Your account on Eventually has been successfuly created.'
          this.$router.push("/userProfile")
        })
        .catch( (error) => {
          console.log('The following error occured: ', error.message)
          this.eror = error.message
        })
      } else {
        this.eror = 'Passwords are not matching'
      }
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
#register-button {
  background-color: snow;
  border: 1px solid skyblue;
  padding: 0.5em 1em;
  margin: 1em 0;
  color: #2c3e50;
  border-radius: 16px;
}
#error-message-div{
  padding: .5em;
  margin-top: 1em;
  color: crimson;
}
#success-message-div{
  color: forestgreen;
}
</style>
