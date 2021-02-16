<template>
  <div class="meal-recipe">
    <div class="meal-recipe__title-wrapper">
      <span class="meal-recipe__title"> {{ fullRecipe.strMeal }} </span>
      <!-- <favorite-btn v-if="isUserAuth" /> -->
      <favorite-btn />
    </div>
    <div class="meal-recipe__details container">
      <img
        slot="cover"
        class="meal-recipe__details-img"
        alt="example"
        style="max-width: 240px"
        :src="fullRecipe.strMealThumb"
      />
      <div class="meal-recipe__details-ingridients">
        <ul class="meal-recipe__details-ingridients-list">
          <li
            class="meal-recipe__ingridients-list-item"
            v-for="(ingridient, idx) in sortIngridients"
            :key="idx"
          >
            {{ ingridient }}
          </li>
        </ul>
      </div>

      <div class="meal-recipe__details-measure">
        <ul class="recipe__details-measure-list">
          <li
            class="meal-recipe__details-measure-list-item"
            v-for="(measure, idx) in sortMeasure"
            :key="idx"
          >
            {{ measure }}
          </li>
        </ul>
      </div>
    </div>
    <a class="meal-recipe__youtube" :href="fullRecipe.strYoutube" target="blank"
      ><a-icon type="youtube" />click me to show</a
    >
    <span class="meal-recipe__instruction container">
      {{ fullRecipe.strInstructions }}
    </span>
  </div>
</template>

<script>
// import { httpService } from "../http/httpService";
import { pickBy } from "lodash";
import FavoriteBtn from "../components/FavoriteBtn/FavoriteBtn.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "MealRecipe",
  components: { FavoriteBtn },
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
    sortMeasure() {
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
    ...mapGetters(["isUserAuth"]),
    ...mapState("mealRecipe", ["mealFullRecipe"]),
  },

  methods: {
    ...mapActions("mealRecipe", ["fetchMaleRecipe"]),
  },

  async created() {
    await this.fetchMaleRecipe(this.$route.params.id);
    this.fullRecipe = this.mealFullRecipe[0];
  },
};
</script>

<style lang="scss">
.meal-recipe {
  @include flex($direction: column);
  color: $main-color;
  text-align: center;
  padding: 25px 0;
  &__title-wrapper {
    @include flex(center, center);
    margin-bottom: 25px;
  }
  &__title {
    @include text($h32, 400, $main-color);
    font-style: italic;
    font-family: "Cookie";
    margin-right: 20px;
  }
  &__details {
    @include flex(space-around, start);
    margin-bottom: 25px;
    width: 100%;
  }
  &__details-img {
    border: 3px solid $main-color;
    border-radius: 15px;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.8);
    }
  }
  &__details-measure-list-item {
    color: $text-color;
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
  &__instruction {
    line-height: 28px;
  }
}
</style>