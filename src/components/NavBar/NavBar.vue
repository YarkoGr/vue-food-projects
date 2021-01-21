<template>
  <ul class="nav-bar">
    <li class="nav-bar__item" v-for="route in routes" :key="route.name">
      <router-link
        active-class="_active"
        exact
        class="nav-bar__item-link"
        :to="route.path"
        >{{ route.name }}</router-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Countries",
          path: "/country",
        },
        {
          name: "Categories",
          path: "/categories",
        },
        {
          name: "Meals",
          path: "/meals",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.nav-bar {
  @include flex(center, center);
  margin-bottom: 0;
  &__item {
    padding-right: 15px;
    &:last-child {
      padding-right: 0;
    }
  }
  &__item-link {
    @include text($h32, 400, $text-color);
    &:focus {
      color: #1890ff;
    }
  }
}
</style>