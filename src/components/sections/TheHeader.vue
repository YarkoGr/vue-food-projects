<template>
  <div class="the-header">
    <div class="the-header__wrapper container">
      <a class="the-header__logo" href="/">
        <img :src="logo.src" :alt="logo.name" />
      </a>
      <nav-bar />
    </div>
  </div>
</template>
<script>
import NavBar from "../NavBar/NavBar.vue";
export default {
  components: { NavBar },
  name: "TheHeader",
  data() {
    return {
      logo: {
        src: require("@/assets/img/FoodLogo.png"),
        name: "logo",
      },
    };
  },
};
</script>
<style lang="scss">
.the-header {
  padding: 20px 0;
  background-color: $bg-header;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-image: url("~@/assets/img/corner.png");
    background-repeat: no-repeat;
    @include size(125px);
    top: 0;
  }
  &::before {
    transform: rotate(90deg);
  }
  &::after {
    transform: rotate(180deg);
    right: 0;
  }
  &__wrapper {
    @include flex(space-between, center);
    @media screen and (max-width: 1200px) {
      @include flex(center, center, column);
    }
  }
  &__logo {
    margin-right: 60px;
    @media screen and (max-width: 1200px) {
      margin-right: 0;
      margin-bottom: 25px;
    }
  }
  &__btn-login {
    min-height: 50px;
    padding: 0 50px;
  }
}
</style>