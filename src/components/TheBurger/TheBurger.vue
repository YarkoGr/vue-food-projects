<template>
  <Slide left class="the-burger">
    <nav-bar />
  </Slide>
</template>
<script>
import { Slide } from "vue-burger-menu";
import NavBar from "../NavBar/NavBar.vue";
export default {
  components: {
    Slide,
    NavBar,
  },
  name: "TheBurger",
};
</script>
<style lang="scss">
.the-burger {
  .bm-item-list {
    display: flex;
  }
  .nav-bar {
    @include flex(start, start, column);
  }
}
</style>