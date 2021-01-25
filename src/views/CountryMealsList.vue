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
@import "../styles/views/countryMealsList.scss";
</style>