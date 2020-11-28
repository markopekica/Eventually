<template>
  <div class="login">
    <router-link to="/"><span class="material-icons" style="color:black;">arrow_back_ios</span></router-link>

    <h1>Login</h1>
    <p>Allows You to use all features.</p>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button id="login-button" type="submit" class="btn btn-primary">Login</button>
    </form>
    <div id="register-link">
      <hr>
      <p>Don't have an account? You can make one <router-link to="/register"><a href="#">here</a></router-link>.</p>
    </div>
  </div>
</template>

<style lang="scss">
.login{
  margin-top: 2em;
}
form{
  max-width: 400px;
  padding: 1em;
  margin: auto;
}
#login-button{
  background-color: #111;
  color: skyblue;
  border: none;
  padding: .5em 1em;
  margin: 1em 0;
}
#register-link{
  margin-top: 4em;
}
</style>