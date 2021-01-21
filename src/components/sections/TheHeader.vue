<template>
  <div class="the-header">
    <div class="the-header__wrapper">
      <a href="/">
        <img
          class="the-header__logo"
          src="../../assets/img/FoodLogo.png"
          alt=""
        />
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
    @include flex(space-between);
    padding: 0 140px;
  }
  &__logo {
    margin-right: 60px;
  }
}
</style>