<template>
  <div class="main-layout">
    <the-header />
    <div class="main-layout__content">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<script>
// import NavBar from "../NavBar/NavBar.vue";
import TheFooter from "../sections/TheFooter.vue";
import TheHeader from "../sections/TheHeader.vue";

export default {
  name: "MainLayout",
  components: {
    // NavBar,
    TheFooter,
    TheHeader,
  },
};
</script>

<style lang="scss">
.main-layout {
  @include flex(stretch, stretch, column);
  height: auto;
  width: 100%;

  &__content {
    height: 100%;
    background-image: url("~@/assets/img/home-bgrd.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>