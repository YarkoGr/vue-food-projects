<template>
  <a-menu class="auth-buttons">
    <a-menu-item v-for="button in buttons" :key="button.name">
      <router-link class="auth-buttons__item" :to="button.path">{{
        button.name
      }}</router-link>
    </a-menu-item>
    <a-menu-item v-if="isUserAuth" @click="signOut">
      <router-link class="auth-buttons__item" to="/"> Log Out</router-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AuthButtons",
  data() {
    return {
      buttons: [
        {
          name: "Login",
          path: "/login",
        },
        {
          name: "Register",
          path: "/register",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    },
  },
};
</script>
<style lang="scss">
.auth-buttons {
  @include flex();
  &__item:not(:last-child) {
    margin-right: 25px;
  }
  &__item {
    color: $main-color;
    &:hover {
      color: $black;
    }
  }
}
</style>