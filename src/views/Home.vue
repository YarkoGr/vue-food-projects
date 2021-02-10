<template>
  <div class="home">
    <!-- <video class="video-bg" autoplay muted loop>
      <source src="../assets/video/cut-meat.mp4" type="video/mp4" />
    </video> -->
    <video-background
      :src="require('@/assets/video/meat-fire.mp4')"
      style="max-height: 400px; height: 100vh"
      overlay="linear-gradient(36deg,#eeaf6730,#ee9b572f)"
    >
      <h1 class="home__title">Food from around the world</h1>
    </video-background>
    <!-- <img
      class="home__img"
      src="../assets/img/Home-left.png"
      alt="home-mael-left"
    /> -->
    <!-- <div class="home__wrapper">
      <h1 class="home__title">Food from around the world</h1>
    </div> -->
    <!-- <img
      class="home__img"
      src="../assets/img/Home-right.png"
      alt="home-mael-right"
    /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      src: "",
    };
  },
};
</script>
<style lang="scss">
.home {
  @include flex(space-between, center);
  height: 100%;
  position: relative;

  // &__img {
  //   max-height: 420px;
  // }
  &__title {
    @include text($h80, 400, $text-color);
    font-family: $font-cookie;
    text-align: center;
  }
  .videobg-content {
    @include flex(center, center);
  }
  .vue-responsive-videobg[data-v-7bbc3657] {
    position: absolute;
  }
  .vue-responsive-videobg {
    max-height: 100% !important;
  }
  .video-wrapper[data-v-229e82cd] {
    // opacity: 0.8;
    background: linear-gradient($gradient, $gradient);
  }
}
</style>
