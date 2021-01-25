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
.category-meals {
  @include flex(center, center, column);
  padding-top: 50px;
  padding-bottom: 50px;
  &__title {
    @include text($h32, 700, $text-color);
    margin-bottom: 30px;
  }
  &__list {
    width: 100%;
    @include flex(space-between, start, $wrap: wrap);
  }
  &__list-item {
    @include flex(center, center, column);
    padding-bottom: 30px;
    cursor: pointer;
  }
  .ant-card {
    margin-bottom: 30px;
  }
  .ant-card-bordered {
    border: 5px solid $main-color;
  }
  &__list-item-title {
    @include text($h28, 400, $text-color);
    max-width: 240px;
    text-align: center;
  }
}
</style>