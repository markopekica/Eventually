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
      <p>
        Eventually is an app designed to be a go to place to find upcoming
        events in your area that fit your interests, without depending on other
        social media platforms. Our goal is to create a fast and user friendly
        platform for both users and promotors that will enable you to quickly
        discover and filter through ongoing events and provide you with all the
        necessary details such as the location, starting times and dates, prices
        and any other important information. While unauthenticated user may only
        explore the site, authenticated users can create new events as well as
        favorite events and leave questions and reviews in the comment section
        of the event. Furthermore all favorited events will be visible in the
        user's profile
      </p>
    </div>
    <div class="team-info">
      <h2>Team Info</h2>
      <p>
        Students @
        <a href="https://fipu.unipu.hr/" target="_blank"
          >Faculty of Informatics in Pula</a
        >
      </p>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <span class="material-icons">masks</span>
            <p>Marko Pekica</p>
            <div class="icons">
              <a href="#" class="fa fa-github"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks</span>
            <p>Darin Kusačić</p>
            <div class="icons">
              <a href="#" class="fa fa-github"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks</span>
            <p>Karlo Prodan</p>
            <div class="icons">
              <a href="#" class="fa fa-github"></a>
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
.container {
  margin: 1em auto;
}
.col-2,
.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app-info,
.team-info {
  margin: 4em auto;
  max-width: 80vw;
  text-align: left;
}
.col-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  padding: 0.5em;
  border: 1px solid lightgray;
}
.fa {
  margin: 1em;
  color: #111;
}
</style>