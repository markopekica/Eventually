<template>
  <div class="info-page">
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
          <h1>About</h1>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    <hr style="width: 42%; margin-bottom: 4em" />
    <div class="app-info">
      <h2>App Info</h2>
      <p>tribe napisat nesto</p>
    </div>
    <div class="team-info">
      <h2>Team Info</h2>
      <p>treba smislit nesto za ovo</p>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <span class="material-icons">masks<!-- elderly --></span>
            <p>marko</p>
            <div>
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks<!-- support_agent --></span>
            <p>darin</p>
            <div>
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks<!-- child_care --></span>
            <p>karlo</p>
            <div>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.container{
  margin: 1em auto;
}
/* h2{
  margin-bottom: 1em;
} */
.col-2, .col-8{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app-info, .team-info {
  margin: 2em auto;
  max-width: 65vw;
  min-height: 32vh;
  text-align: left;
}
.col-4{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  padding: .5em;
  /* border: 1px dotted #111; */
}
.fa{
  margin: 1em;
  color: #111;
}
</style>