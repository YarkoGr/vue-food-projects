<template>
  <div class="recipe">
    <span class="recipe__title"> {{ fullRecipe.strMeal }} </span>

    <a class="recipe__youtube" :href="fullRecipe.strYoutube" target="blank"
      ><a-icon type="youtube" />click me to show</a
    >

    <span class="recipe__instruction"
      ><img
        class="recipe__img"
        alt="example"
        style="max-width: 200px"
        :src="fullRecipe.strMealThumb"
      />
      {{ fullRecipe.strInstructions }}
    </span>
    <ul class="recipe__ingridients">
      <!-- <li
        class="recipe__ingridients-list"
        v-for="ingrid in fullRecipe"
        :key="ingrid.idMeal"
      >
        {{ ingrid.strIngredient }}
      </li> -->
    </ul>
    <!-- <a-card hoverable style="width: 240px">
      <img slot="cover" alt="example" :src="randomMeal.strMealThumb" />
      <a-card-meta :title="randomMeal.strMeal">
        <template slot="description">
          {{ randomMeal.strArea }}
        </template>
      </a-card-meta>
    </a-card> -->
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "MealRecipe",
  data() {
    return {
      fullRecipe: {},
    };
  },

  async created() {
    const recipe = await httpService.getMealById(this.$route.params.id);
    this.fullRecipe = recipe.meals[0];
  },
};
</script>

<style lang="scss">
.recipe {
  @include flex($direction: column);
  color: $main-color;
}
</style>