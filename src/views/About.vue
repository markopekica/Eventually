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
      <p>Eventually is an app designed to be a go to place to find upcoming events in your area that fit your interests, without depending on other social media platforms. Our goal 
is to create a fast and user friendly platform for both users and promotors that will enable you to quickly discover and filter through ongoing events and provide you with all
the necessary details such as the location, starting times and dates, prices and any other important information. While unauthenticated user may only explore the site,
authenticated users can create new events as well as favorite events and leave questions and reviews in the comment section of the event. Furthermore all favorited events
will be visible in the user's profile </p>
    </div>
    <div class="team-info">
      <h2>Team Info</h2>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <span class="material-icons">masks<!-- elderly --></span>
            <p>Marko Pekica</p>
            <p>Student at Faculty of Informatics Pula<p>
            <div>
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks<!-- support_agent --></span>
            <p>Darin Kusačić</p>
            <p>Student at Faculty of Informatics Pula<p>
            <div>
              <a href="#" class="fa fa-github"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="col-4">
            <span class="material-icons">masks<!-- child_care --></span>
            <p>Karlo Prodan</p>
            <p>Student at Faculty of Informatics Pula<p>
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
  margin: 4em auto;
  max-width: 65vw;
  /* min-height: 32vh; */
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