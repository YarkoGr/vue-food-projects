<template>
  <a-menu class="nav-bar">
    <a-menu-item
      class="nav-bar__item"
      v-for="route in routes"
      :key="route.name"
    >
      <router-link
        active-class="_active"
        exact
        class="nav-bar__item-link"
        :to="route.path"
        >{{ route.name }}</router-link
      >
    </a-menu-item>
  </a-menu>
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
    font-family: $font-cookie;
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
.ant-menu-vertical {
  border-right: none;
}
.ant-menu {
  background: inherit;
}
.ant-menu-vertical {
  margin: 0;
}
.ant-menu-item-selected > a,
.ant-menu-item-selected > a:hover {
  color: $main-color;
}
.ant-menu-item > a:hover {
  color: $main-color;
}
.nav-bar__item-link:focus {
  color: $main-color;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: inherit;
}
</style>