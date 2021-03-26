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
  @include flex();
  .anticon-heart {
    transition: color 0.5s ease;
  }
  .ant-badge-count {
    transition: background 0.5s ease;
    background: $some;
  }
  :hover .anticon-heart {
    color: $black;
  }
  :hover .ant-badge-count {
    background: $main-color;
  }
  &__img {
    svg {
      width: 40px;
      height: 100%;
    }
  }
  .ant-scroll-number {
    position: absolute;
    top: -33px;
    right: -6px;
  }
  a {
    color: $main-color;
  }
}
</style>