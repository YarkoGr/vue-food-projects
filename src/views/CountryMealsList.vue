<template>
  <div class="countryMealsList">
    <h2>{{ $route.params.country }}</h2>
    <div class="countryMealsList__list">
      <div
        class="countryMealsList__list-item"
        v-for="meals in areaMeals"
        :key="meals.idMeal"
      >
        <h3>{{ meals.strMeal }}</h3>
        <a-card hoverable style="max-width: 200px">
          <img slot="cover" alt="example" :src="meals.strMealThumb" />
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
export default {
  name: "CountryMealsList",
  data() {
    return {
      areaMeals: "",
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
.countryMealsList {
  text-align: center;
  &__list {
    @include flex($wrap: wrap);
  }
  &__list-item {
    text-align: center;
    @include flex(center, center, column);
  }
}
</style>