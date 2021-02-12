<template>
  <div>
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
    <div class="counter-wrap" v-if="isUserAuth">
      <counter-icon></counter-icon>
    </div>
  </div>
</template>
<script>
import CounterIcon from "../counterIcon/CounterIcon.vue";
import { mapGetters } from "vuex";
export default {
  components: { CounterIcon },
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
  computed: {
    ...mapGetters(["isUserAuth"]),
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