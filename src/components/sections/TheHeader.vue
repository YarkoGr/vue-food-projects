<template>
  <div class="the-header">
    <div class="the-header__wrapper container">
      <a class="the-header__logo" href="/">
        <img :src="logo.src" :alt="logo.name" />
      </a>
      <nav-bar />
      <modal-auth />
    </div>
  </div>
</template>
<script>
import NavBar from "../NavBar/NavBar.vue";
import { mapGetters } from "vuex";
import ModalAuth from "../authentication/ModalAuth.vue";
// import TheBadge from "../TheBadge/TheBadge.vue";
export default {
  components: { NavBar, ModalAuth },
  name: "TheHeader",
  data() {
    return {
      logo: {
        src: require("@/assets/img/FoodLogo.png"),
        name: "logo",
      },
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"]),
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
  .auth-buttons {
    position: absolute;
    bottom: -14px;
    right: 38%;
  }
  .nav-bar {
    margin-bottom: 20px;
  }
}
</style>