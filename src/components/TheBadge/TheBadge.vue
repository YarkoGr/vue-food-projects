<template>
  <div class="the-badge">
    <router-link to="/favorites">
      <a-badge :count="favorite.length"></a-badge>
      <a-icon class="the-badge__img" type="heart" />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState("addToFavorite", ["favorite"]),
  },
};
</script>

<style lang="scss">
.the-badge {
  position: relative;
  &__img {
    svg {
      width: 45px;
      height: 100%;
    }
  }
  .ant-scroll-number {
    position: absolute;
    top: -40px;
    right: -10px;
  }
}
</style>