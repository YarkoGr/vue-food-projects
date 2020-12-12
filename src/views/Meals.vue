<template>
  <div class="meals">
    <a-card hoverable style="width: 240px">
      <img slot="cover" alt="example" :src="randomMeal.strMealThumb" />
      <a-card-meta :title="randomMeal.strMeal">
        <template slot="description">
          {{ randomMeal.strArea }}
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";

export default {
  name: "Meals",
  data() {
    return {
      randomMeal: {},
      filters: {
        categories: [],
        glasses: [],
        ingredients: [],
        alcoholic: [],
      },
    };
  },
  async created() {
    const { meals } = await httpService.getRandomMeal(this.$route.params.id);
    this.randomMeal = meals[0];
  },
};
</script>

<style lang="scss">
</style>