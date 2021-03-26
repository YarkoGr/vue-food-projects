<template>
  <div class="the-footer">
    <ul class="the-footer__list">
      <li class="the-footer__list-item" v-for="(item, idx) in icons" :key="idx">
        <a class="the-footer__list-item-link" :href="item.link"
          ><img
            class="the-footer__list-item-img"
            :src="item.src"
            :alt="item.name"
        /></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
  data() {
    return {
      icons: [
        {
          src: require("@/assets/svg/Facebook.svg"),
          name: "Facebook.svg",
          link: "#",
        },
        {
          src: require("@/assets/svg/Instagram.svg"),
          name: "Instagram.svg",
          link: "#",
        },
        {
          src: require("@/assets/svg/Youtube.svg"),
          name: "Youtube.svg",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.the-footer {
  padding: 20px 0;
  background-color: $bg-footer;
  &__list {
    @include flex(center, center);
  }
  &__list-item:not(:last-child) {
    margin-right: 25px;
  }
  &__list-item-link {
    @include flex();
  }
  &__list-item-img {
    border: 2px solid transparent;
    transition: background 0.5s ease;
    &:hover {
      background: $text-color;
      border: 2px solid $main-color;
      border-radius: 5px;
    }
  }
}
</style>