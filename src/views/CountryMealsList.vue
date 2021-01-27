<template>
  <div class="country-meals-list">
    <span class="country-meals-list__title">{{ $route.params.country }}</span>
    <ul>
      <XyzTransitionGroup
        class="country-meals-list__list container"
        appear
        xyz="duration-1 appear-front-1 small-1 appear-small-0 stagger-2 out-stagger-0"
      >
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
      </XyzTransitionGroup>
    </ul>
  </div>
</template>

<script>
import "@animxyz/core";
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
    --xyz-duration: 0.6s;
    --xyz-scale-x: 1.25;
    --xyz-scale-y: 0;
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