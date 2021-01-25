<template>
  <div class="country-meals-list">
    <span class="country-meals-list__title">{{ $route.params.country }}</span>
    <ul class="country-meals-list__list container">
      <li
        class="country-meals-list__list-item"
        v-for="meals in areaMeals"
        :key="meals.idMeal"
        @click="
          $router.push({
            name: 'MealRecipe',
            params: { id: meals.idMeal },
          })
        "
      >
        <a-card hoverable style="max-width: 240px">
          <img slot="cover" alt="example" :src="meals.strMealThumb" />
        </a-card>
        <span class="country-meals-list__list-item-title">{{
          meals.strMeal
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "CountryMealsList",
  data() {
    return {
      areaMeals: {},
    };
  },
  async created() {
    const areaMealsList = await httpService.getAreaMeals(
      this.$route.params.country
    );
    this.areaMeals = areaMealsList.meals;
  },
};
</script>

<style lang="scss">
.country-meals-list {
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