<template>
  <div class="recipe">
    <span class="recipe__title"> {{ fullRecipe.strMeal }} </span>

    <div class="recipe__details">
      <img
        slot="cover"
        class="recipe__details-img"
        alt="example"
        style="max-width: 240px"
        :src="fullRecipe.strMealThumb"
      />
      <div class="recipe__details-ingridients">
        <ul class="recipe__details-ingridients-list">
          <li
            class="recipe__ingridients-list-item"
            v-for="(ingridient, idx) in sortIngridients"
            :key="idx"
          >
            {{ ingridient }}
          </li>
        </ul>
      </div>

      <div class="recipe__details-measure">
        <ul class="recipe__details-measure-list">
          <li
            class="recipe__details-measure-list-item"
            v-for="(measure, idx) in sortMeasure"
            :key="idx"
          >
            {{ measure }}
          </li>
        </ul>
      </div>
    </div>
    <a class="recipe__youtube" :href="fullRecipe.strYoutube" target="blank"
      ><a-icon type="youtube" />click me to show</a
    >
    <span class="recipe__instruction container">
      {{ fullRecipe.strInstructions }}
    </span>
  </div>
</template>

<script>
import { httpService } from "../http/httpService";
import { pickBy } from "lodash";
export default {
  name: "MealRecipe",
  data() {
    return {
      fullRecipe: "",
    };
  },

  computed: {
    sortIngridients: function () {
      const arr = [];
      const listRecipe = pickBy(this.fullRecipe, (value, key) =>
        key.startsWith("strIngredient")
      );
      for (let i in listRecipe) {
        if (listRecipe[i]) {
          arr.push(listRecipe[i]);
        }
      }
      return arr;
    },
    sortMeasure: function () {
      const arr = [];
      const listRecipe = pickBy(this.fullRecipe, (value, key) =>
        key.startsWith("strMeasure")
      );
      for (let i in listRecipe) {
        if (listRecipe[i]) {
          arr.push(listRecipe[i]);
        }
      }
      return arr;
    },
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
  text-align: center;
  padding: 25px 0;
  &__title {
    @include text($h32, 400, $main-color);
    font-style: italic;
    font-family: "Cookie";
    margin-bottom: 25px;
  }
  &__details {
    @include flex(space-around);
    margin-bottom: 25px;
  }
  &__details-img {
    border: 3px solid $main-color;
  }
  &__youtube {
    @include flex(center, center);
    margin-bottom: 25px;
    width: auto;
  }
  .anticon-youtube {
    font-size: 36px;
    margin-right: 25px;
  }
}
</style>