<template>
  <div class="the-favorites">
    <div class="the-favorites__wrapper container">
      <h2 class="the-favorites__title">Your Favorites Meals</h2>
      <ul class="the-favorites__list">
        <li
          class="the-favorites__list-item"
          v-for="(item, idx) in favorite"
          :key="idx"
        >
          <a-card
            hoverable
            style="max-width: 240px"
            @click="
              $router.push({
                name: 'MealRecipe',
                params: { id: item.idMeal },
              })
            "
          >
            <img slot="cover" alt="example" :src="item.strMealThumb" />
            <a-card-meta :title="item.strMeal">
              <template slot="description"> {{ item.strArea }}</template>
            </a-card-meta>
          </a-card>
        </li>
      </ul>
      <a-button @click="$store.dispatch('addToFavorite/removeMealFromFavorite')"
        >Clear List</a-button
      >
    </div>
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
.the-favorites {
  &__wrapper {
    padding: 30px 0;
  }
  &__list {
    @include flex(start, center, row, wrap);
  }
  &__list-item {
    padding: 25px;
  }
}
</style>