<template>
  <div class="app">
    <main-layout>
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./components/loyout/MainLoyaut";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  @include flex(stretch, stretch);
  flex: 1;
}
</style>
