<template>
  <div class="home">
    <img
      class="home__img"
      src="../assets/img/Home-left.png"
      alt="home-mael-left"
    />
    <h1 class="home__title">Food from around the world</h1>
    <img
      class="home__img"
      src="../assets/img/Home-right.png"
      alt="home-mael-right"
    />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
<style lang="scss">
.home {
  @include flex(space-between, center);
  height: 100%;
  background-image: url("~@/assets/img/home-bgrd.png");
  background-size: cover;
  background-repeat: no-repeat;
  &__img {
    max-height: 420px;
  }
  &__title {
    @include text($h80, 400, $text-color);
    font-family: $font-cookie;
    text-align: center;
  }
}
</style>
