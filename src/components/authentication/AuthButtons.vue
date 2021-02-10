<template>
  <div class="auth-buttons">
    <router-link
      class="auth-buttons__item"
      :to="button.path"
      v-for="button in buttons"
      :key="button.name"
      >{{ button.name }}</router-link
    >
  </div>
</template>
<script>
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
          name: "Regiter",
          path: "/register",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.auth-buttons {
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