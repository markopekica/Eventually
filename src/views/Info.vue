<template>
  <div class="info">
    <!-- <router-link to="/"><span class="material-icons" style="color:black;">arrow_back_ios</span></router-link> -->
    <h1>Info Page</h1>
    <hr style="width:42%; margin-bottom:2em;">
    <div class="app-info">
      <h2>App Info</h2>
    </div>
    <div class="team-info">
      <h2>Team Info</h2>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <span class="material-icons">elderly</span>
            <p>marko</p>
          </div>
          <div class="col-4">
            <span class="material-icons">support_agent</span>
            <p>darin</p>
          </div>
          <div class="col-4">
            <span class="material-icons">child_care</span>
            <p>karlo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style lang="scss">
.info{
  margin: 1em 0;
}
.app-info{
  margin: 1em 0;
  min-height: 32vh;
}
.team-info{
}
/* .material-icons{
  color: #111;
} */
</style>