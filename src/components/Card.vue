<template>
    <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/400/300" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Event title</h5>
            <p>Location</p>
            <p>Date-time</p>
            <a href="#" class="btn btn-primary">Full info</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    margin: 1em 2em;
    display: inline-block;
}
</style>
