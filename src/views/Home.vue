<template>
  <div class="home">
    <img
      class="home__img"
      src="../assets/img/Home-left.png"
      alt="home-mael-left"
    />
    <div class="home__wrapper">
      <h1 class="home__title">Food from around the world</h1>
      <the-carousel />
    </div>
    <img
      class="home__img"
      src="../assets/img/Home-right.png"
      alt="home-mael-right"
    />
  </div>
</template>

<script>
import TheCarousel from "../components/carousel/TheCarousel.vue";
export default {
  components: { TheCarousel },
  name: "Home",
};
</script>
<style lang="scss">
.home {
  @include flex(space-between, center);
  height: 100%;

  &__img {
    max-height: 420px;
  }
  &__title {
    @include text($h80, 400, $text-color);
    font-family: $font-cookie;
    text-align: center;
  }
  .the-carousel {
    max-width: 500px;
  }
}
</style>
