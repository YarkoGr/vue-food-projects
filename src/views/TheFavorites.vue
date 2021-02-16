<template>
  <div class="the-favorites">
    <a-card
      v-for="(item, idx) in favorite"
      :key="idx"
      hoverable
      style="width: 240px"
    >
      <img slot="cover" alt="example" :src="item.strMealThumb" />
      <a-card-meta :title="item.strMeal">
        <template slot="description"> {{ item.strArea }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TheFavorites",
  computed: {
    ...mapState("addToFavorite", ["favorite"]),
  },
};
</script>
<style lang="scss">
</style>