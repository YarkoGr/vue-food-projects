<template>
  <div class="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./components/loyout/MainLayout.vue";

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
