<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <div class="main-layout__header-wrapper container">
        <img
          class="main-layout__header-logo"
          src="../../assets/img/FoodLogo.png"
          alt=""
        />
        <nav-bar></nav-bar>
      </div>
    </div>
    <div class="main-layout__main-content">
      <slot />
    </div>
    <div class="main-layout__footer"><h2>footer</h2></div>
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";

export default {
  name: "MainLayout",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
.main-layout {
  @include flex(stretch, stretch, column);
  height: auto;
  width: 100%;

  &__header {
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
  }
  &__header-wrapper {
    display: flex;
  }
  &__header-logo {
    margin: 0 50px 0 100px;
  }
  &__main-content {
    height: 100%;
    background-image: url("~@/assets/img/home-bgrd.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  &__footer {
    background-color: $bg-footer;
  }
}
</style>