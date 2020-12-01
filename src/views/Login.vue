<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <router-link to="/">
            <span class="material-icons" style="color: black"
              >arrow_back_ios</span
            >
          </router-link>
        </div>
        <div class="col-4">
          <h1>Login</h1>
          <p>and gain access to all features</p>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <!-- <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div> -->
      <button id="login-button" type="submit" class="btn btn-primary">
        Login
      </button>
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

<style lang="scss" scoped>
.login-page {
  margin-top: 1em;
}
form {
  margin-top: 1em;
}
.form-group {
  max-width: 400px;
  padding: .5em;
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
</style>