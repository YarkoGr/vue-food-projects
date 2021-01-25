<template>
  <div class="category-meals">
    <span class="category-meals__title">{{ $route.params.category }}</span>
    <ul class="category-meals__list container">
      <li
        class="category-meals__list-item"
        v-for="meal in categoryMealsList"
        :key="meal.categoryMealsList"
        @click="
          $router.push({
            name: 'MealRecipe',
            params: { id: meal.idMeal },
          })
        "
      >
        <a-card hoverable style="max-width: 240px">
          <img slot="cover" alt="example" :src="meal.strMealThumb" />
        </a-card>
        <span class="category-meals__list-item-title">{{ meal.strMeal }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "CategoryMeals",
  data() {
    return {
      categoryMealsList: "",
    };
  },

  async created() {
    const categoryMeals = await httpService.getCategoryMeals(
      this.$route.params.category
    );
    this.categoryMealsList = categoryMeals.meals;
  },
};
</script>
<style lang="scss">
@import "~@/styles/views/categoryMeals.scss";
</style>