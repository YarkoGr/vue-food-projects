<template>
  <div class="recipe">
    <span class="recipe__title"> {{ fullRecipe.strMeal }} </span>

    <img
      class="recipe__img"
      alt="example"
      style="max-width: 200px"
      :src="fullRecipe.strMealThumb"
    /><a class="recipe__youtube" :href="fullRecipe.strYoutube" target="blank"
      ><a-icon type="youtube" />click me to show</a
    >
    <span class="recipe__instruction">
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
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "MealRecipe",
  data() {
    return {
      fullRecipe: "",
      ingridients: "",
    };
  },

  async created() {
    const recipe = await httpService.getMealById(this.$route.params.id);
    this.fullRecipe = recipe.meals[0];
    console.log(this.fullRecipe);
  },
};
</script>

<style lang="scss">
.recipe {
  @include flex($direction: column);
  color: $main-color;
}
</style>