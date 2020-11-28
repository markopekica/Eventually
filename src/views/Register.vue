<template>
  <div class="register">
     <router-link to="/login"><span class="material-icons" style="color:black;">arrow_back_ios</span></router-link>
    <h1>Create account</h1>
    
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2">Repeat password</label>
        <input type="password" class="form-control" id="exampleInputPassword2">
      </div>
      <button id="register-button" type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<style lang="scss">
.register{
  margin-top: 2em;
}
form{
  max-width: 450px;
  padding: 1em;
  margin: auto;
}
#register-button{
  background-color: #111;
  color: skyblue;
  border: none;
  padding: .5em 1em;
  margin: 1em 0;
}
</style>