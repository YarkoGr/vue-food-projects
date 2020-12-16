<template>
  <div class="countryMealsList">
    <span class="countryMealsList__title">{{ $route.params.country }}</span>
    <ul class="countryMealsList__list">
      <li
        class="countryMealsList__list-item"
        v-for="meals in areaMeals"
        :key="meals.idMeal"
        @click="
          $router.push({
            name: 'MealRecipe',
            params: { id: meals.idMeal },
          })
        "
      >
        <a-card>
          <img slot="cover" alt="example" :src="meals.strMealThumb" />
        </a-card>
        <span class="countryMealsList__list-item-title">{{
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
.countryMealsList {
  text-align: center;
  &__title {
    @include text($h60, 700, $main-color);
    font-family: $font-cookie;
  }
  &__list {
    @include flex(center, $wrap: wrap);
  }
  &__list-item {
    width: calc(100% / 24 * 4);
    text-align: center;
    @include flex(start, center, column);
    padding: 0 15px 15px 15px;
    &:hover > span {
      border: 1px solid $main-color;
    }
    &:hover {
      cursor: pointer;
    }
  }

  &__list-item-title {
    @include text($h32, 400, $main-color);
    font-family: $font-cookie;
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
  }
}
</style>